


import React from "react"
import {View, Text,StyleSheet,ImageBackground,ScrollView,Image} from "react-native";


class Animate extends React.Component{
state={showanimation:true}

  componentDidMount(){

    // setTimeout(()=>this.setState({showanimation:false}),800)
    setTimeout(()=>this.props.navigation.navigate("screen"),1050)
  }


 render(){
   return (
     <View>



    <View style={{paddingTop:"50%", alignItems:"center"}}>
 <Image source={require("./assets/checkmark.png")} style={styles.image}/> 
<Text style={{color:"green"}}> Success</Text>
</View>  




</View>


   )
}


}
const styles=StyleSheet.create({
image:{
height:100,
width:100
},
image2:{
height:99,
width:99
}
})

export default Animate


