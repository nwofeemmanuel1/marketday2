


































import React from "react"
import {View, Text,StyleSheet,ImageBackground,ScrollView,Image} from "react-native";

// import RegisterScreen from "./Register"
// import { createSwitchNavigator } from "react-navigation";
class FirstScreen extends React.Component{

  state={
    name:false,
    width: 35,
   height: 13,
   backgroundColor: "green",
  //  intervalid:""
   }

   increment=()=>{
     this.setState({width:this.state.width+3})
   }


  
 componentDidMount=()=>{
let intervalid=setInterval(this.increment,20)
 this.setState({intervalid:intervalid})
 
 }


// componentWillUnmount(){
// if(this.state.width>=200){
//     return true
//   console.log("dh")
// }
// }

 shouldComponentUpdate(){
    if(this.state.width >=300){
   
  
   clearInterval(this.state.intervalid)
//  this.props.navigation.navigate("LoginScreen")
   return false
     }else{
     return  true
     
    }
 }

 
 state
 render(){
 //navigation setstate instead of using this.props.navigation.navigate


 

  return( 
 
<View style={styles.srollableview}>



<View style={styles.progressview}>
<Text style={styles.name}>Submitting...{this.state.name}</Text>
<View style={styles.progress}><View  style={this.state}></View></View>
</View>
</View>



  )
 

}

}
const styles=StyleSheet.create({
image:{
  flex:1
},
srollableview:{
flex:1,
alignItems:"center",
justifyContent:"center"
},
logo:{
  height:150,
  width:150,
  alignSelf:"center",
  
},
name:{
color:"green",
fontSize:22,
margin:2
},
progressview:{
  paddingTop:"60%",
  alignItems:"center"
},
progress: {

width: "100%",
paddingLeft:2,
backgroundColor: "gray",
borderRadius:50,


},
})

export default FirstScreen











