



import React from "react"
import {View, Text,StyleSheet,ImageBackground,ScrollView,Image} from "react-native";
// import RegisterScreen from "./Register"
// import { createSwitchNavigator } from "react-navigation";
class FirstScreen extends React.Component{

  state={
    name:false,
    width: 35,
   height: 13,
  //  backgroundColor: "red",
   backgroundColor: "white",
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
 this.props.navigation.navigate("LoginScreen")
   return false
     }else{
     return  true
    }
 }

 
 state
 render(){
 //navigation setstate instead of using this.props.navigation.navigate


 

  return( 
    // <View style={{flex:1,backgroundColor:"red"}}>
     <ImageBackground source={require ("./assets/background1.jpg")} style={styles.image}> 
<ScrollView style={styles.srollableview}>
<Image source={require("./assets/Target_Corporation_logo_vector.svg.png")} style={styles.logo}/>


<View style={styles.progressview}>
<Text style={styles.name}>MarketDay{this.state.name}</Text>
<View style={styles.progress}><View  style={this.state}></View></View>
</View>
</ScrollView>

    </ImageBackground> 

  )
 

}

}
const styles=StyleSheet.create({
image:{
  flex:1
},
srollableview:{
flex:1,
paddingTop:"50%"
},
logo:{
  height:130,
  width:130,
  alignSelf:"center",
  opacity:0.4
},
name:{
color:"white",
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
backgroundColor: "red",
borderRadius:50,


},
})

export default FirstScreen