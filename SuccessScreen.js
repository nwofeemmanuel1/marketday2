



import React, { Component } from 'react';
import {   View ,Text,StyleSheet,Image, Button} from 'react-native';
// import MainApp from './MainApp';

class SuccessScreen extends Component {

  constructor() {
    super();
    // shouldComponentUpdate=this.intervalid.bind(this)
  }
  state={
  height:20,
    width:20,
    opacity:0.1,
 
}

show={
  showcontact:true
}



// successtext="success "

// rendertext=()=>{
// this.setstata({texttorender:this.successtext[0]})
// }
// changeopacity=()=>{

//  this.setState({
//    height:this.state.height +=5,
//   width:this.state.height +=5,
// opacity:this.state.opacity +0.03,

//  })

// }


componentDidMount(){
this.props.screenProps.ongetlisting(this.props.screenProps.user.token)

// alert(this.props.navigation.getParam('token'))
// this.setState({token:this.props.navigation.getParam('token')})
let intervalid= setInterval(()=>{
  this.setState({
   height:this.state.height +=5,
  width:this.state.height +=5,
opacity:this.state.opacity +0.03,
intervalid:intervalid
  })} ,10)

//  if(this.state.height>=200){
//  this.setState({intervalid:intervalid})
//  }
   
  
}



shouldComponentUpdate=()=>{
  if(this.state.height >=200){
// alert(this.state.intervalid)
   clearInterval(this.state.intervalid)
 this.props.navigation.navigate("MainApp",{
   token:this.state.token
 })
   return false
     }else{
     return  true
     
    }



}

handlesuccess=()=>{
  return(
    {
       height:this.state.height,
    width:this.state.width,
    opacity:this.state.opacity,
    }
  )
}



render(){
 

  return(

    <View style={styles.mainview}>
     <Image source={require("./assets/done.png")} style={this.handlesuccess()} />
     <Text style={styles.text}>success you already registerd  </Text>
   

     </View> 
     
     )
}
  
 
   
     
     
    
}

const styles=StyleSheet.create( {
mainview:{
 alignItems:"center",
  paddingTop:"50%"
},
imageitem:{
  height:200,
  width:200,
  opacity:1
},
text:{
  color:'green',

},
  }
)
export default SuccessScreen






















