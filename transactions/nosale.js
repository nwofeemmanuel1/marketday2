

 import React from "react"
 import {View , ScrollView,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from "react-native"

 class Nosales extends React.Component{
 
render(){
  return(
 <View style={styles.view}>


<View style={styles.card}>

<Text style={styles.text}>Please You Havent Made Any Transactions Here </Text>
</View>


 </View>
  )
}
}
 const styles=StyleSheet.create({
   view:{
  flex:1,
backgroundColor:"#E5E5E5",

   },
   card:{
      alignItems:"center",  
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1,
justifyContent:"center"
   },

   text:{
    
  textAlign:"center",
  color:"green",
fontSize:25
   },
   date:{
     textAlign:"center",
     color:"green",
     fontSize:18
   }
 })
 export default Nosales
