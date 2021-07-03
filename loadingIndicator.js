

import React from "react"
import {View, Text,StyleSheet,ImageBackground,ScrollView,Image} from "react-native";
class LoadingIndicator extends React.Component{

  state={
    name:false,
    width: 35,
   height: 13,
   backgroundColor: "green",

   }

   increment=()=>{
     this.setState({width:this.state.width+3})
   }


  
 componentDidMount=()=>{
let intervalid=setInterval(this.increment,20)
 this.setState({intervalid:intervalid})
 
 }


 shouldComponentUpdate(){
    if(this.state.width >=300){
   
  
   clearInterval(this.state.intervalid)
 this.props.navigation.navigate("Checkmark")
   return false
     }else{
     return  true
     
    }
 }

 
 state
 render(){

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
paddingTop:"10%"
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

export default LoadingIndicator





























