




import React, { Component } from 'react';
import {   View ,Text,StyleSheet,Image, Button} from 'react-native';
// import MainApp from './MainApp';

class RequestProccessed extends Component {

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
 setTimeout(()=>this.props.navigation.navigate("TaskScreen",1000))
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
     <Image source={require("../assets/good.png")} style={this.handlesuccess()} />
     <Text style={styles.text}>Congratulations your Refund was proccessed successfully  </Text>
   

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
  // opacity:0.5,
  textAlign:"center"
},
  }
)
export default RequestProccessed































