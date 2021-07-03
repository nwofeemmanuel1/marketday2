 
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
import { color } from "react-native-reanimated"
import * as ImagePicker from 'expo-image-picker';
class Profile extends React.Component{
reduce=""
state={
  errMessage:'',
    profilecolor:"green",
    depositcolor:"black",
  showdepositform:false,
  selectedImage:"https://picsum.photos/200/300/?blur",
  save:"Save",
  // phone:this.props.screenProps.user.phone,
  
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


fetchuser=async(token,email,username,country,phone)=>{
  try{
this.setState({save:"Saving..."})
  
const response=await fetch('https://marketdayserver.herokuapp.com/api/user/update',{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
    token:token,
       email:email, 
       username:username,
    country,
    phone,

  })
})
const result= await response.json()
console.log(result)
if(result.error) return this.setState({errMessage:result.errMessage, save:"save"})
return(this.setState({save:"saved"}), this.props.navigation.navigate("screen"))
  }catch(err){
    console.log(err.message , "please make sure you have an internet connection ")
    this.setState({save:"Not saved"})
  }


}


// fetchuser('invalidtoken', 'enwofe2020@gmail.com','nigeria', 08060304393)

 getuser=async(token,email,)=>{
    try{
          
const response=await fetch("https://marketdayserver.herokuapp.com/api/user/update/me",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
   token:token,
        email:email,


    })
})
const result=await response.json()
if(result.error ){
  alert('error')
}else{
  this.setState({ user:result.message,username:result.message.username,country:result.message.country,phone:`+234${result.message.phone}`})


  
}


    }catch(err){
        console.log(err)
    }

}

componentDidMount(){
this.getuser(this.props.screenProps.user.token,this.props.screenProps.user.user.email)
}



    render(){
   

    
    
return(
<ScrollView style={styles.container} >
 
 <View style={styles.containerview}>
<Image source={{uri:this.state.selectedImage}} style={styles.profile}/>

<Text style={styles.text}>{this.state.user && this.state.user.username}</Text>

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
   
<Text style={styles.text2}>Make Deposit</Text>

<TextInput  placeholder="Card Number"    style={styles.textinput} keyboardType="numeric" />

<TextInput  placeholder="Expiry Date"    style={styles.textinput} keyboardType="numeric"/>

<TextInput  placeholder="Csv"  style={styles.textinput} keyboardType="numeric"/>

<TextInput  placeholder="Amount Eg $100"  style={styles.textinput} keyboardType="numeric"/>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("screen")} >
  <Text style={styles.post}>Deposit</Text>
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
<TextInput  placeholder="Phone Number"  style={styles.textinput} onChangeText={text=>this.setState({phone:text})} value={this.state.phone && this.state.phone}/>

<TouchableOpacity onPress={()=>this.fetchuser(this.props.screenProps.user.token,this.props.screenProps.user.user.email,this.state.username,this.state.country,this.state.phone)} >
  <Text style={styles.post}>{this.state.save}</Text>
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
    padding:8,
    textAlign:"center",
    backgroundColor:"green",
    color:"white"
  },

})
export default Profile