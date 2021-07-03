import React, { Component } from 'react';

import {

  Image,
  StyleSheet,
StatusBar,
  Text,
  View,
TouchableOpacity,
Button
} from 'react-native';
// import Counter from "./components/Counter"

class TopNavigation extends Component {
  
    
    
     
   
  
 

handlecolorchange=()=>{
  if (this.props.TotalItemAdded >=1){
    return {
  position:"absolute",
    right:7,
  top:-8,
  fontSize:22,
  color:"green",
  opacity:1
    }
  }else{
    return {
  position:"absolute",
    right:7,
  top:-8,
  fontSize:22,
  color:"red",
  opacity:0
    }
  }
}


// styles.appname

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.appname}> Market Day </Text>
        
        <View style={styles.secondview}>
    <TouchableOpacity  onPress={this.props.onTaskScreenNavigate}><Text style={styles.home}>Wallet</Text></TouchableOpacity>
    <TouchableOpacity onPress={this.props.onFilterNavigation}>< Text style={styles.filter}>Filter</Text></TouchableOpacity>
    <TouchableOpacity onPress={this.props.onNavigate}><Text style={styles.cart}> Cart </Text></TouchableOpacity>
    <Text style={this.handlecolorchange()}> {this.props.TotalItemAdded}</Text>
  
        </View>
          {/* <Button title={()}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#214c63", //rememer to try green background
    height: "19%",
  
  },
  appname: {
    alignSelf: 'center',
    color: 'white',
   paddingTop:"5%",
    fontSize: 25,
    fontWeight:"bold",
    
  },

  secondview: {
    flexDirection: 'row',
    paddingTop: '5%',
    justifyContent:"space-between"
   
  },
  home: {
    fontSize: 24,
    color:"white",
  width:100,
    borderWidth:0.1,
    borderColor:"white",
    borderRadius:50,
    textAlign:"center",
//  fontFamily:"serif",
 fontWeight:"bold"
  },
  filter: {
  
    fontSize: 24,
    color:"white",
  width:100,
    borderWidth:0.1,
    borderColor:"white",
    borderRadius:50,
    textAlign:"center",
    fontWeight:"bold",
  },
  cart:{
    fontSize: 24,
    color:"white",
  width:100,
    borderWidth:0.1,
    borderColor:"white",
    borderRadius:50,
    textAlign:"center",
  fontWeight:"bold",
  },
  // TotalItemAdded:{
  //   position:"absolute",
  //   right:7,
  // top:-8,
  // fontSize:22,
  // color:"green"
  
  
  // }

});
export default TopNavigation;





















// import * as React from "react";
// import {Button} from "react-native";
// // import {useNavigation  } from "@react-navigation/native";
// function TopNavigation ({navigation}){
//   // const navigation=useNavigation();
// return (
//   <Button title="go to another"
//   onPress={()=>navigation.navigate("screen2")}
//   />
// )
// }

// export default TopNavigation