 
import React from "react"
import {
  Text, ScrollView,
  StyleSheet,Image, 
  Dimensions, 
  View,StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert
} from "react-native"
import {
  Card,CardTitle,CardContent,
   CardAction,CardButton, CardImage
  } from "react-native-cards"
import { color } from "react-native-reanimated"
import * as ImagePicker from 'expo-image-picker';
class Profiledeposit extends React.Component{

state={
    profilecolor:"black",
    depositcolor:"green",
  showdepositform:true,
  selectedImage:"https://picsum.photos/200/300/?blur",
  disabled:false,
  Deposit:"Deposit"
  // cardnumber,
  // expirydate,
  // csv,
  // amount
}

handleDepositDrawer=()=>{
 
  this.setState({depositcolor:"green"})
  this.setState({profilecolor:"black"})
  this.setState({showdepositform:true})

} 

handleProfileDrawer=()=>{
if(this.state.profilecolor === "black"){
 this.setState({profilecolor:"green"})
  this.setState({depositcolor:"black"})
  this.setState({showdepositform:false})
}
this.setState({showdepositform:false})
}
// componentWillUnmount(){
//  alert("shii")
// }


  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      return alert('permission to access images denied');
    } else {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      } else {
      
          this.setState({ selectedImage: pickerResult.uri });
        
      
      }
    }
  };



 fetchuser=async(token,email,cardnumber,expirydate,csv,amount)=>{
const response=await fetch('https://marketdayserver.herokuapp.com/api/users/deposit',{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
    token,
    email,
 cardnumber,
     
     expirydate,
     csv,
     amount
    // country,
    // phone,

  })
})
const result= await response.json()
return result
}

// fetchuser("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGMwMDE3MDNjY2RiMDAyMjg0MTMzYSIsImlhdCI6MTYxOTc5MTg5MH0.1MqY444A7uDpiL96VzLzAikDwG1UPxhha0qp3it1qSQ",'enwofe2020@gmail.com',16,22/2/7,224,0)
handlecolorchange=()=>{
  if(!this.state.disabled){
 return{
    borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:10,
    textAlign:"center",
    backgroundColor:"green",
    color:"white"
}
  }else{
    return{
    borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:10,
    textAlign:"center",
    backgroundColor:"gray",
    color:"white"
} 
  }
 
}



handlesubmit=async()=>{
if(!this.state.cardnumber) {
  return this.setState({errMessage:"card number is required"})
}else{
if(!+this.state.cardnumber){
 return  this.setState({errMessage:"card number must be a number"})
}else{
  if(this.state.cardnumber.length < 15 || this.state.cardnumber.length > 16)return this.setState({errMessage:"card number must be a greater than 15 and less than 17 characters"})
}
}


if(!this.state.expirydate) {
  return this.setState({errMessage:"expiry date is required"})
}else{
if(!+this.state.expirydate){
 return  this.setState({errMessage:"expiry date must be a number"})
}else{
  if(this.state.expirydate.length < 3 ||this.state.expirydate.length >5)return this.setState({errMessage:"expiry date must be a greater than 3 and less than 5 characters"})
}
}




if(!this.state.csv) {
  return this.setState({errMessage:"csv is required"})
}else{
if(!+this.state.csv){
 return  this.setState({errMessage:"csv must be a number"})
}else{
  if(this.state.csv.length < 3 || this.state.csv.length >5)return this.setState({errMessage:"csv must be a greater than 3 and less than 5 characters"})
}
}



if(!this.state.amount) {
  return this.setState({errMessage:"amount is required"})
}else{
if(!+this.state.amount){
 return  this.setState({errMessage:"amount must be a number"})
}else{
  if(this.state.amount < 0)return this.setState({errMessage:"amount must be a greater than 0"})
}
}
// if(!this.state.amount) return this.setState({errMessage:"please enter amount"})

try{
  this.setState({errMessage:" ", Deposit:"proceessing ", })
this.setState(prevstate=>({disabled:!prevstate.disabled}))

const result=await this.fetchuser(this.props.screenProps.user.token,this.props.screenProps.user.user.email,this.state.cardnumber,this.state.expirydate,this.state.csv,this.state.amount) 
    
try{
if(result.error === false){
  alert('completed...')
    this.setState({errMessage:" ", Deposit:"Success ", })
this.setState(prevstate=>({disabled:!prevstate.disabled}))
}else{
  this.setState({errMessage:result.errMessage})
    this.setState({errMessage: result.errMessage, Deposit:"Deposit ", })
this.setState(prevstate=>({disabled:!prevstate.disabled}))
}

}catch(err){ console.log('err',err.message)}

}catch(err){
    this.setState({errMessage:err.message, Deposit:"Deposit ", })
this.setState(prevstate=>({disabled:!prevstate.disabled}))
Alert.alert("No Network ","please make sure you have an internet connection and try again",[{text:"Ok"}])
}

}



    render(){
   

    
    
return(
<ScrollView style={styles.container} >
 
 <View style={styles.containerview}>
<Image source={{uri:this.state.selectedImage}} style={styles.profile}/>

<Text style={styles.text}>{this.props.screenProps.user.user.username}</Text>

<Text style={styles.text}>{this.props.screenProps.user.user.email}</Text>
<TouchableOpacity onPress={()=>this. openImagePickerAsync()}>
<Text style={{color:"white", textAlign:"center", margin:5, color:"green"}}>{" * change profile picture"}</Text>
</TouchableOpacity>

</View>




    <Card style={{flex:1,margin:20, padding:20,backgroundColor:"whitesmoke",opacity:1}}>
  <KeyboardAvoidingView behavior="padding">
  
   <Text style={{textAlign:"center"}}>Account Details</Text>

<View style={{flexDirection:"row",margin:13}}>
<TouchableOpacity onPress={this.handleProfileDrawer}>
<Text style={{color:this.state.profilecolor}}>My Profile</Text>
</TouchableOpacity>

<TouchableOpacity onPress={this.handleDepositDrawer}>
<Text  style={{marginLeft:"40%" , color:this.state.depositcolor}}>Make deposit</Text>
</TouchableOpacity>



</View>

{this.state.showdepositform ?
<View>
 <Text style={{textAlign:"center",color:"red"}}>{this.state.errMessage}</Text>
<Text style={styles.text2}>Make Deposit</Text>

<TextInput  placeholder="Card Number"    style={styles.textinput} keyboardType="numeric" value={this.state.cardnumber} onChangeText={text=>this.setState({cardnumber:text})} />

<TextInput  placeholder="Expiry Date"    style={styles.textinput} keyboardType="numeric" value={this.state.expirydate} onChangeText={text=>this.setState({expirydate:text})}/>

<TextInput  placeholder="Csv"  style={styles.textinput} keyboardType="numeric" value={this.state.csv} onChangeText={text=>this.setState({csv:text})}/>

<TextInput  placeholder="Amount Eg $100"  style={styles.textinput} keyboardType="numeric"  value={this.state.amount} onChangeText={text=>this.setState({amount:text})}/>
{/* ()=>this.props.navigation.navigate("screen") */}
<TouchableOpacity onPress={()=>this.handlesubmit()} disabled={this.state.disabled} >
  <Text style={this.handlecolorchange()}>{this.state.Deposit}</Text>
</TouchableOpacity>

</View>







: 


<View>
 
  
<Text style={styles.text2}>UserName</Text>
<TextInput  placeholder="UserName"    style={styles.textinput}/>
<Text style={styles.text2}>Email</Text>
<TextInput  placeholder="Email"    style={styles.textinput}/>
<Text style={styles.text2}>Country</Text>
<TextInput  placeholder="Country"  style={styles.textinput}/>
<Text  style={styles.text2}>Phone</Text>
<TextInput  placeholder="Phone Number"  style={styles.textinput}/>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("screen")} >
  <Text style={styles.post}>Save</Text>
</TouchableOpacity>

</View>


}


  </KeyboardAvoidingView>
</Card>



</ScrollView> 
)
    }
}

const styles=StyleSheet.create({
  container:{
flex:1,
// paddingTop:StatusBar.currentHeight
  },
 containerview:{
width:Dimensions.get("window").width,
 height:Dimensions.get("window").height/2.5,  
 backgroundColor: "#214c63"
 
  },
  profile:{
height:100,
width:100,
alignSelf:"center",
marginTop:StatusBar.currentHeight*1.5,
borderRadius:60

  },
  text:{
    color:"white",
    textAlign:"center"
  },
  text2:{
 color:"gray",
    textAlign:"center"
  },
  textinput:{
    borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:4,
    width:Dimensions.get("window").width /1.3,
  
  },
    post:{
     borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:5,
    textAlign:"center",
    backgroundColor:"green",
    color:"white"
  },

})
export default Profiledeposit



