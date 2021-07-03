
import React from "react"
import { ScrollView,StyleSheet,TouchableOpacity,Text,StatusBar,Image, View,Dimensions,} from "react-native"
import {Card,CardTitle,CardContent, CardAction,CardButton, CardImage} from "react-native-cards"
import TopNavigation from "./topnavigation"
class AnimationView extends React.Component{


static navigationOptions={
  tabBarIcon:({focused,tintColor})=>{
    if(focused)return <Image source={require("./assets/person.png")} style={{height:20,width:20}}/>
    return <Image source={require("./assets/person.png")} style={{height:20,width:20, opacity:0.1}}/>
  }
}


    render(){
   
return(
  <View style={{flex:1}}>

    <View
 style={styles.appview} >
 <Text style={styles.name} >MarketDay</Text>
 </View>



  <ScrollView style={styles.container}>






<TouchableOpacity onPress={()=>this.props.navigation.navigate("AddListingScreen")}>
<View style={styles.card} >
 
  <Image source={require("./assets/marketplace.png")} style={{width:"100%", height:160}}/>
 
  <Text style={styles.heading}>Start selling today</Text> 
 <Text style={styles.text}>Your journey of becoming a successfull online marketer starts here</Text>
<Text style={styles.text}>add listing to let your product appear before millions of buyers</Text>

<Text style={styles.button}>Add Listings </Text>
{/* <Text>OR</Text>
<Text style={styles.withdrawal}>withdraw</Text> */}
</View> 

</TouchableOpacity >


<TouchableOpacity onPress={()=>this.props.navigation.navigate("ProfileScreen",{
  showDepositform:false
})}>
<View style={styles.card} >
 
  <Image source={require("./assets/avatar.png")} style={{width:"100%", height:160}}/>
 
   <Text style={styles.heading}>Account setup</Text> 


<Text style={styles.text}>add your profile picture to let buyers know they are buying from the right source</Text>
<Text style={styles.text}>verify your account with Bvn or national id card today to unlock more features </Text>
<Text style={styles.button}> SETTINGS </Text>

</View> 

</TouchableOpacity>






</ScrollView>
</View>
)
}



}

const styles=StyleSheet.create({
  container:{
flex:1,
backgroundColor:"#E5E5E5"
  },
  appview:{
paddingTop:StatusBar.currentHeight,
},
  name:{
  textAlign:"center",
  backgroundColor:"#fff",
  color:"#214c63",
  fontSize:20,
  fontWeight:"bold",
  padding:8,
 borderTopColor:"white",
 borderWidth:1,
 borderBottomColor:"gray"
},
 card:{
alignItems:"center",
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1
 },
 text:{
   textAlign:"center",
  //  fontStyle:"normal",
  //  opacity:0.7,
  //  fontWeight:"bold",
   fontSize:16
  },
  messageheading:{
   fontSize:20
   ,fontWeight:"bold",
   opacity:0.7,
   padding:5,
   color:"#214c63",
   margin:4
  },

 heading:{
   fontSize:20
   ,fontWeight:"bold",
  //  opacity:0.7,
   padding:5,
   color:"#214c63"
  },
 button: {
 
    backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.5,
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
  withdrawal:{
    color:"gray",
   fontWeight:"bold"
  },
  text2:{
    textAlign:"center",
   fontStyle:"normal",
   opacity:0.7,
   fontWeight:"bold",
   marginTop:20
  }
  
})
export default AnimationView









































































// import React from "react"
// import {View, Text,StyleSheet,ImageBackground,ScrollView,Image} from "react-native";
// class LoadingIndicator extends React.Component{

//   state={
//     name:false,
//     width: 35,
//    height: 13,
//    backgroundColor: "green",

//    }

//    increment=()=>{
//      this.setState({width:this.state.width+3})
//    }


  
//  componentDidMount=()=>{
// let intervalid=setInterval(this.increment,20)
//  this.setState({intervalid:intervalid})
 
//  }


//  shouldComponentUpdate(){
//     if(this.state.width >=300){
   
  
//    clearInterval(this.state.intervalid)
//  this.props.navigation.navigate("Checkmark")
//    return false
//      }else{
//      return  true
     
//     }
//  }

 
//  state
//  render(){

//   return( 
 
// <View style={styles.srollableview}>



// <View style={styles.progressview}>
// <Text style={styles.name}>Submitting...{this.state.name}</Text>
// <View style={styles.progress}><View  style={this.state}></View></View>
// </View>
// </View>



//   )
 

// }

// }
// const styles=StyleSheet.create({
// image:{
//   flex:1
// },
// srollableview:{
// flex:1,
// paddingTop:"10%"
// },
// logo:{
//   height:150,
//   width:150,
//   alignSelf:"center",
  
// },
// name:{
// color:"green",
// fontSize:22,
// margin:2
// },
// progressview:{
//   paddingTop:"60%",
//   alignItems:"center"
// },
// progress: {

// width: "100%",
// paddingLeft:2,
// backgroundColor: "gray",
// borderRadius:50,


// },
// })

// export default LoadingIndicator


























































































