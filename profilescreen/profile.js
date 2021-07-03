 import Spinner from 'react-native-loading-spinner-overlay';
 import{validateCArd,makeDeposit} from "../functions/walletTransactions"
import React from "react"
import {
  Text, ScrollView,
  StyleSheet,Image, 
  Dimensions, 
  View,StatusBar,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native"
import { Card } from "react-native-cards"
import {handleColorChange2,
  handleColorChange3,
  openImagePickerAsync,
  getuser,
  updateUser,
  handleColorChange
} from "../functions/profileFunc"
import AwesomeAlert from 'react-native-awesome-alerts';
class Profile extends React.Component{
is_mounted=true
state={
  errMessage:'',
  errMessage2:"",
    profilecolor:"black",
    depositcolor:"black",
  showdepositform:false,
  selectedImage:"https://picsum.photos/200/300/?blur",
  save:"Save",
show_alert:false,
Deposit:"Deposit",
}



handleViewChange=(update)=>{
  this.setState({showdepositform:update})
  if(this.state.showdepositform){
   this.setState({ showdepositform:update})
  }else{
 this.setState({showdepositform:update})
  }
}

handleImageUpload=async()=>{
const result=await  openImagePickerAsync()
if(result.error)return
  this.setState({ selectedImage: result.result });
}

componentDidMount =async()=>{
  this.is_mounted=true
this.handleViewChange( this.props.navigation.getParam("showDepositform") )
const result=await getuser(this.props.screenProps.user.token,this.props.screenProps.user.user.email)
if(this.is_mounted){
if(result.error){
  if(result.ref)return this.setState({show_alert:true})
  return this.setState({errMessage:"unexpected error"})
}

this.setState({user:result.user,username:result.username,country:result.country,phone:result.phone})
}
}

componentWillUnmount(){
this.is_mounted=false
}

handleUpdateUser=async(token,email,username,country,phone)=>{
  this.setState({save:"Saving...",disabled:true}) 
  try{
const result=await updateUser(token,email,username,country,phone)
if(this.is_mounted){
  if(result.error) return this.setState({errMessage:result.errMessage,save:"Not saved",disabled:false})
return this.setState({save:"saved",disabled:false})
}

  }catch(err){
if(this.is_mounted)return this.setState({show_alert:true,save:"Not Saved",disabled:false})
}

}



submit=async()=>{
  console.log("called")
 const result= await validateCArd(this.state)
 if(result.error) return this.setState({errMessage2:result.errMessage})
try{
this.setState(prevstate=>({disabled:true, errMessage2:" ", Deposit:"proceessing ",}))
const result=await makeDeposit(this.props.screenProps.user.token,this.props.screenProps.user.user.email,this.state.cardnumber,this.state.expirydate,this.state.csv,parseInt(this.state.amount)) 
 try{
   if(this.is_mounted){

if(result.error === false){
this.props.navigation.navigate("Checkmark")

}else{
  // this.setState({errMessage:result.errMessage})
this.setState({disabled:false, errMessage2: result.errMessage, Deposit:"Deposit ",})
}
 }}
catch(err){ console.log('err',err.message)
}

}catch(err){
  if(this.is_mounted)return this.setState({disabled:false, Deposit:"Deposit ", show_alert:true})
}
}




    render(){    
return(
<ScrollView style={styles.container} >
 
 <View style={styles.containerview}>
<Image source={{uri:this.state.selectedImage}} style={styles.profile}/>

<Text style={styles.text}>{this.state.user && this.state.user.username}</Text>

<Text style={styles.text}>{this.props.screenProps.user.user.email}</Text>
<TouchableOpacity onPress={this.handleImageUpload}>
<Text style={{color:"white", textAlign:"center", margin:5, color:"gray", fontSize:20}}> * change profile picture"</Text>
</TouchableOpacity>

</View>




    <Card style={{flex:1,margin:20, padding:20,backgroundColor:"whitesmoke",opacity:1}}>
  <KeyboardAvoidingView behavior="padding">
  
   <Text style={{textAlign:"center"}}>Account Details</Text>

<View style={{flexDirection:"row",margin:13}}>
<TouchableOpacity onPress={()=>this.handleViewChange(false)}>
<Text style={{color:handleColorChange2(this.state)}}>My Profile</Text>
</TouchableOpacity>

<TouchableOpacity onPress={()=>this.handleViewChange(true)}>
<Text  style={{marginLeft:"40%" , color:handleColorChange3(this.state)}}>Make deposit</Text>
</TouchableOpacity>



</View>

{this.state.showdepositform ?
<View>
   
<Text style={styles.text2}>Make Deposit</Text>
<Text style={{fontSize:15,color:"red",textAlign:"center"}}>{this.state.errMessage2}</Text>
<TextInput  placeholder="Card Number"    style={styles.textinput} keyboardType="numeric" onChangeText={text=>this.setState({cardnumber:text})} />

<TextInput  placeholder="Expiry Date"    style={styles.textinput} keyboardType="numeric" onChangeText={text=>this.setState({expirydate:text})}/>

<TextInput  placeholder="Csv"  style={styles.textinput} keyboardType="numeric"  onChangeText={text=>this.setState({csv:text})}/>

<TextInput  placeholder="Amount Eg $100"  style={styles.textinput} keyboardType="numeric"   onChangeText={text=>this.setState({amount:text})}/>

<TouchableOpacity onPress={this.submit} disabled={this.state.disabled} >
  <Text style={handleColorChange(this.state)}>{this.state.Deposit}</Text>
</TouchableOpacity>

</View>



: 


<View>
 
<Text style={{textAlign:"center",color:"red"}}>{this.state.errMessage}</Text>
<Text style={styles.text2}>UserName</Text>
<TextInput  placeholder="UserName"    style={styles.textinput} value={ this.state.username} onChangeText={text=>this.setState({username:text})} />
<Text style={styles.text2} >Email</Text>
<TextInput  placeholder="Email"    style={styles.textinput} value={this.props.screenProps.user.user.email}/>
<Text style={styles.text2}>Country</Text>
<TextInput  placeholder="Country"  style={styles.textinput} onChangeText={text=>this.setState({country:text})} value={ this.state.country}/>
<Text  style={styles.text2}>Phone</Text>
<TextInput  placeholder="Phone Number"  style={styles.textinput} onChangeText={text=>this.setState({phone:text})} value={ this.state.phone }/>

<TouchableOpacity 
disabled={this.state.disabled}
onPress={
  ()=>this.handleUpdateUser(this.props.screenProps.user.token,this.props.screenProps.user.user.email,this.state.username,this.state.country,this.state.phone)} >
  <Text style={handleColorChange(this.state)}>{this.state.save}</Text>
</TouchableOpacity>

</View>
}


  </KeyboardAvoidingView>
</Card>

 <Spinner
  visible={this.state.disabled}
/>
<AwesomeAlert
          show={this.state.show_alert}
          title="Connect to a Network"
          message="please make sure you have an internet connection and try again "
          closeOnTouchOutside={false}
          showConfirmButton={true}
          confirmText="Confirm"
          confirmButtonColor="green"
          confirmButtonStyle={{borderRadius:50,width:Dimensions.get("window").width/1.5,}}
          confirmButtonTextStyle={{textAlign:"center"}}
          onConfirmPressed={() => this.setState({show_alert:false})}
          titleStyle={{color:"#FC766AFF",margin:6,fontSize:19}}
          contentContainerStyle={{padding:2,margin:2,}}
          messageStyle={{textAlign:"center",fontSize:17,color:"#000000FF"}}
           alertContainerStyle={{width:Dimensions.get("window").width}}
        />

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
})
export default Profile