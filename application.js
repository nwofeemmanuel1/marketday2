

import React from 'react';
import {View, Text,StyleSheet,ImageBackground,ScrollView,Image, Button} from "react-native";
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createSwitchNavigator} from "react-navigation"
import FirstScreen from "./firstscreen";
import RegisterScreen from "./Register";
import SuccessScreen from "./SuccessScreen";
import HomeScreenAppNavigator from "./HomeScreenAppNavigator"
import MainApp from "./MainApp"

const AppNavigator = createSwitchNavigator({

  Home:  FirstScreen,
  RegisterScreen:RegisterScreen,
SuccessScreen:SuccessScreen,

// HomeScreenAppNavigator:HomeScreenAppNavigator,

MainApp:MainApp,


},
{
  initialRouteName:'Home'
}
);

export default createAppContainer(AppNavigator);






// import TopNavigation from "./topnavigation"
// import RenderHomeScreen from "./RenderHomeScreen"
// import React from "react"
// import {
//   View,
//   Text
// } from "react-native"

// class MainApp extends React.Component{
//   state={}

// render(){
// return(
//   <View style={{flex:1}}>
// <TopNavigation />
// <RenderHomeScreen/>
//   </View>
// )
// }

// }

// export default MainApp

















