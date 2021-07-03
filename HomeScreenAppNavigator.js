





import React from 'react';
import {View, Text,} from "react-native";
import { createAppContainer, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainApp from "./MainApp"




const AppNavigator = createStackNavigator({

  Home:  {
    screen:MainApp,
  }


});

const AppContainer= createAppContainer(AppNavigator);

class HomeScreenAppNavigator extends React.Component{
render(){
  return(
  
   
   <View>
       <Text>hello homescrennav</Text>
       <AppContainer/>
   </View>
  )
}
}
export default HomeScreenAppNavigator
