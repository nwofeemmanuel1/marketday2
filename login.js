import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  View,
ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
  Image,
  KeyboardAvoidingView,
StatusBar,
Alert,

} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {handleLoginValidation,data,handlesubmit}  from "./functions/handleLogin"
import handlecolorchange from './functions/logincolorchange'
class Login extends Component {
  is_mounted=true

  state={
    errMessage:"",
    login:"Login",
    disabled:false,
    loading:true,
    unmounted:false,
    show_alert:false
  }

 handlesubmit=async()=>{
    this.setState({disabled:true,login:"Proccessing...", errMessage:""})
try{
 const response= await this.props.screenProps.onlogin(this.state.email,this.state.pasword  )
if(response.error){
  if(this.is_mounted)return this.setState({errMessage:response.message,disabled:false,login:"Login"})
  console.log("can not setstate in an unmounted screen")
}else if(response.loged_in === true ){
  if(this.is_mounted)return this.props.navigation.navigate("SuccessScreen")
 console.log("result is ok but cant navigate outsiide of an unmounted screen")
}else{
   if(this.is_mounted){
   this.setState({disabled:false,login:"Login",show_alert:true})

   }
}

}catch(err){
  console.log( "err is :" + err)

}
}
functioncaller=(state)=>{

const isvalid=handleLoginValidation(state)
console.log(isvalid)
if(isvalid.error) return this.setState({errMessage:isvalid.errMessage})
return this.handlesubmit()
}
componentDidMount(){
 this.is_mounted=true
//  console.log(this.is_mounted)
}

componentWillUnmount=()=>{
  this.is_mounted=false
}



  render(){
    return(
      <ImageBackground source={require("./assets/money.png")} style={{width:"100%",height:"100%"}}>

       <ScrollView style={styles.container}>
    <KeyboardAvoidingView style={styles.containerview} behavior="padding ">

<Text style={styles.appname}>Market Day</Text>
<View 
style={{
  width:"100%",
  backgroundColor:"green",
  height:2,
  margin:30
}}
/>
<Text style={{color:"red",textAlign:"center"}}>{this.state.errMessage}</Text>

<View style={{alignItems:"center",margin:"7%"}}>
<View style={{flexDirection:"row"}}>
  <Image source={require("./assets/emailicon.png")} style={styles.image}/>

</View>
<TextInput style={styles.textinput} placeholder="E-Mail" value={this.state.email} onChangeText={text=>this.setState({email:text})} autoCapitalize="none"/>
</View>


<View style={{alignItems:"center",margin:"1%"}}>
<View style={{flexDirection:"row",margin:8}}>
  <Image source={require("./assets/paswordicon.png")} style={styles.image}/>
  {/* <Text style={styles.text}>Pasword</Text> */}
</View>

<TextInput placeholder="Pasword" style={styles.textinput} secureTextEntry={true}  value={this.state.pasword} onChangeText={text=>this.setState({pasword:text})} autoCapitalize="none"/>
</View>


<TouchableOpacity onPress={()=>this.functioncaller(this.state)} disabled={this.state.disabled} >
  <Text style={handlecolorchange(this.state)} >{this.state.login}</Text>
</TouchableOpacity>

<Text>OR</Text>

<TouchableOpacity onPress={()=>this.props.navigation.navigate("RegisterScreen")} >
<Text style={styles.register}>Register</Text>
</TouchableOpacity>

  <Spinner
          visible={this.state.disabled}
          textContent={'Loading Please Wait...'}
          textStyle={styles.spinnerTextStyle}
        />

  <AwesomeAlert
          show={this.state.show_alert}
          title="Connect to a Network"
          message="please make sure you have an internet connection and try again"
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
    </KeyboardAvoidingView>
  </ScrollView>
  </ImageBackground>
    )
  }
}
const styles=StyleSheet.create({
  container:{
      flex:1,
// backgroundColor:"", 

  },
  containerview:{
    marginTop:StatusBar.currentHeight*2,
alignItems:"center",  
// marginTop:20,
backgroundColor:"#fff",
height:Dimensions.get("window").height/1.2,
width:"89%",
alignSelf:"center",
borderColor:"green",
borderWidth:1,

borderRadius:50
  },
  appname:{
    color:"green",
    fontSize:22,
    fontWeight:"bold",
    paddingTop:10
  },
  text:{
fontSize:18
  },
  image:{
    height:20,
    width:25,
    // borderRadius:5
  },
  textinput:{
    borderRadius:50,
    borderColor:"gray",
    width:Dimensions.get("window").width/1.3,
    borderWidth:1,
    textAlign:"center"
  },
  button:{
      backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.3,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:20,
    color: 'white',
    overflow:"hidden"
  },
  register:{
    textAlign:"center",
    color:"green",
fontSize:19
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
})
export default Login




      // <AwesomeAlert
      //     show={this.state.disabled}
      //     showProgress={true}
      //     title="Logging Please Wait..."
      //     progressSize={30}
      //     progressColor="green"
      //   />






























  