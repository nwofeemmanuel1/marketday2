
import React, { Component } from 'react';
import {   View ,Text,StyleSheet,Image, Button,ActivityIndicator,Dimensions,RefreshControl} from 'react-native';


class Loadfirst extends Component {
render(){
  return(
 <View style={styles.container}
 
     refreshControl={
          <RefreshControl
            refreshing={true}
          />
     }   > 
 
<View style={styles.mainview}>
  <Image source={require("./assets/loadingIndicator.png")} style={{height:100,width:150 , padding:20,margin:20}}/>
 <ActivityIndicator size="large" animating={true} color="green"/>
 <Text style={{color:"green", fontSize:25}}>Loading...</Text>
</View>
     
</View>
  
     )
}
    
}

const styles=StyleSheet.create( {
mainview:{
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
 container: {
  flex:1,
backgroundColor:"#E5E5E5",
justifyContent:"center"
},
  }
)
export default Loadfirst