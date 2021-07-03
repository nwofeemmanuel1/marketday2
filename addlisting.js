// import { Picker } from '@react-native-picker/picker';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  TextInput,
  StatusBar,
  Button,
  Alert,
  ActivityIndicator,
  Picker
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Spinner from 'react-native-loading-spinner-overlay';
import { openImagePickerAsync, handleColorchange, validateListing, update_is_mounted } from "./functions/addlisting"
class AddListingScreen extends React.Component {
  is_mounted = true
  state = {
    itemname: "",
    price: "",
    description: "",
    category: "",
    post: "POST",
    animating: false,
    disabled: false,
    show_alert: false

  }

  uploadedimage=[]

  

 createListing=async()=>{
   try{
    const response=await fetch("https://marketdayserver.herokuapp.com/api/users/listings",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        token:this.props.screenProps.user.token,
        uploadImage:this.state.bases,
        name:this.state.itemname,
        price:this.state.price,
     description:this.state.description,
     category:this.state.category,
     seller:this.props.screenProps.user.user.email,
     user:this.props.screenProps.user.user.id
    })
} )


const result=await response.json()
console.log(result)
return result


   }catch(err){
     console.log(err)
return{ error:true,errMessage:err.message,ref:true}

}
 }






  updateInputData = (update, ref) => {
    if (ref === "itemname") return this.setState({ itemname: update })
    if (ref === "price") {
      if (+update) return this.setState({ price: update })
      return this.setState({ price: "" })
    }
    if (ref === "description") return this.setState({ description: update })
    if (ref === "category") return this.setState({ category: update })
  }

  openimage = async () => {
    const pickerResult = await openImagePickerAsync()
    if (!this.state.firstimage && pickerResult) return this.setState(prevstate => ({ firstimage: pickerResult.uri, bases: [pickerResult.base64] }))
    if (!this.state.secondimage && pickerResult) return this.setState(prevstate => ({ secondimage: pickerResult.uri, bases: [...prevstate.bases, pickerResult.base64] }))
    if (!this.state.thirdimage && pickerResult) return this.setState(prevstate => ({ thirdimage: pickerResult.uri, bases: [...prevstate.bases, pickerResult.base64] }))
    if (!this.state.fourthimage && pickerResult) return this.setState(prevstate => ({ fourthimage: pickerResult.uri, bases: [...prevstate.bases, pickerResult.base64] }))
   
    // console.log(this.state.bases)
  }


  callValidateListing = async() => {
    const result = validateListing({
      state: this.state,
      // setter: this.setter,
      // navigation: this.props.navigation,
    })
  
  if(result.error && result.ref)return this.setState({show_alert:true})
  if(result.error)return this.setState({errMessage:result.errMessage})
 this.setState({errMessage:""})
 console.log("called a function")
this.setState({disabled:true,post:"Proccessing..."})
 const finalResult=await this.createListing()
 if(finalResult.error ===true && finalResult.errMessage !=="JSON Parse error: Unrecognized token '<'" )return this.setState({errMessage:finalResult.errMessage,disabled:false,post:"POST"})
 if(finalResult.error ===true && finalResult.errMessage =="JSON Parse error: Unrecognized token '<'") return this.setState({errMessage:"Image quality too large please reduce image and try again",disabled:false,post:"POST"})
this.props.navigation.navigate("LoadingIndicator")
 

  }

  componentDidMount() {
    this.is_mounted = true
  }

  componentWillUnmount = () => {
    this.is_mounted = false
    update_is_mounted()
  
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>


          <View style={{
            flexDirection: "row",
            justifyContent: !this.state.firstimage ? "center" : "space-evenly",
            flexWrap: "wrap",
            margin: 2,
            padding: 2,
            paddingTop: 15

          }}>

            <Image source={{ uri: this.state.firstimage, height: 150, width: 150 }} />
            <Image source={{ uri: this.state.secondimage, height: 150, width: 150 }} />
            <Image source={{ uri: this.state.thirdimage, height: 150, width: 150 }} />
            <Image source={{ uri: this.state.fourthimage, height: 150, width: 150 }} />

            {!this.state.fourthimage ? <TouchableOpacity onPress={this.openimage}>
              <View style={{ height: 150, width: 150, backgroundColor: "#fff", borderRadius: 35, alignItems: "center" }}><Text style={styles.plus}>+</Text></View>
            </TouchableOpacity> : null}

          </View>



          <View >
            <Text style={{ color: "red", textAlign: "center" }}>{this.state.errMessage && this.state.errMessage}</Text>
            <TextInput placeholder="Item Name" style={styles.textinput} value={this.state.itemname} onChangeText={text => this.updateInputData(text, "itemname")} />
            <TextInput placeholder="price" style={styles.textinput} keyboardType="numeric" value={this.state.price} onChangeText={text => this.updateInputData(text, "price")} />
            <TextInput placeholder="Description" style={styles.textinput} value={this.state.description} onChangeText={text => this.updateInputData(text, "description")} />
           

            <View style={styles.textinput}>
              <Picker style={{ height: 30, color: "gray", }} 
              onValueChange={(value)=>this.setState({category:value})}
           
              selectedValue={(this.state && this.state.category)}
              >
                <Picker.Item label="Please Selecte A Category" />
                <Picker.Item label="=>  Cosmetics" value="Cosmetics" />
                <Picker.Item label="=>  Clothes" value="Clothes" />
                <Picker.Item label=" =>  Cameras" value="Cameras" />
                <Picker.Item label="=>  Category Is not specified here" value="null" />
              </Picker>
            </View>


            <TouchableOpacity
              style={handleColorchange(this.state)}
              disabled={this.state.disabled}
              onPress={this.callValidateListing}
            >
              <Text style={{ color: "white", fontSize: 15 }}>{this.state.post}  </Text>
              <ActivityIndicator size="small" color="white" animating={this.state.animating} />
            </TouchableOpacity>




            <TouchableOpacity onPress={() => this.props.navigation.navigate("screen")} >
              <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <Spinner
            visible={this.state.disabled}
            textContent={'Submitting Please Wait...'}
            textStyle={{ color: "white" }}
          />

          <AwesomeAlert
            show={this.state.show_alert}
            title="Image Required"
            message="please add atleast one image to be able to submit listing"
            closeOnTouchOutside={false}
            showConfirmButton={true}
            confirmText="Confirm"
            confirmButtonColor="green"
            confirmButtonStyle={{ borderRadius: 50, width: Dimensions.get("window").width / 1.5, }}
            confirmButtonTextStyle={{ textAlign: "center" }}
            onConfirmPressed={() => this.setState({ show_alert: false })}
            titleStyle={{ color: "#FC766AFF", margin: 6, fontSize: 19 }}
            contentContainerStyle={{ padding: 2, margin: 2, }}
            messageStyle={{ textAlign: "center", fontSize: 17, color: "#000000FF" }}
            alertContainerStyle={{ width: Dimensions.get("window").width }}
          />
        </ScrollView>
      </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5"
  },
  topnav: {
    backgroundColor: "#214c63",
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get("window").width,
    alignItems: "center",
    marginBottom: 5
  },
  plus: {
    color: "gray",
    fontSize: 100
  },
  navtext: {
    color: "white",
    fontSize: 23,
    paddingTop: StatusBar.currentHeight
  },
  img: {
    height: 150,
    width: 150
  },
  textinput: {
    borderColor: "gray",
    borderRadius: 50,
    borderWidth: 1,
    textAlign: "center",
    margin: 5,
    width: Dimensions.get("window").width / 1.05,
    alignSelf: "center",
    padding: 3
  },

  cancel: {
    borderColor: "gray",
    borderRadius: 50,

    textAlign: "center",
    margin: 7,
    width: Dimensions.get("window").width / 1.1,
    padding: 5,
    textAlign: "center",
    // backgroundColor:"gray",
    color: "gray",
    fontSize: 20
  },

})
export default AddListingScreen