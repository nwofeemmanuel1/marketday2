import TopNavigation from "./topnavigation"
import RenderHomeScreen from "./RenderHomeScreen"
import { createAppContainer, } from 'react-navigation';
import {createStackNavigator, HeaderTitle} from "react-navigation-stack"
import React from "react"
import {
  View,
  Text,
  Button
} from "react-native"

class ViewMoreScreen extends React.Component{
  static navigationOptions={
    title:"great",
    
  }
  render(){
    return(
      <View>
        <Text>{this.props.navigation.getParam('id')}</Text>
        <Text>{this.props.navigation.getParam('source')}</Text>
      </View>
    )
  }
}

// class RenderHomeScreen extends React.Component{
//   static navigationOptions={
//     title:"greast",
    
//   }
//   render(){
//     return(
//       <View>
//        <Text>hello react render</Text>
//      <Button title="presser" onPress={()=>this.props.navigation.navigate("screen2", {
//       number:203 
//      })}/>
//       </View>
//     )
//   }
// }








const AppNavigator = createStackNavigator({


    screen:RenderHomeScreen,   
   screen2: ViewMoreScreen,
   



});


const AppContainer= createAppContainer(AppNavigator);


class MainApp extends React.Component{
  state={
    counters: [
      {
        id: 1,
        price: 100,
        name: 'red jacket',
        seller: 'john',
        source: 'https://picsum.photos/id/237/200/300',
      },
      {
        id: 2,
        price: 100,
        name: 'red jacket',
        seller: 'john',
        source: 'https://picsum.photos/200/300?grayscale',
      },
      {
        id: 3,
        price: 100,
        name: 'red jacket',
        seller: 'john',
        source: 'https://picsum.photos/200/300/?blur',
      },
      {
        id: 4,
        price: 200000,
        name: 'tanker',
        seller: 'john',
        source: 'https://picsum.photos/seed/picsum/200/300',
      },
    ],
  
      
    

  }

// navigator=(e) =>{
// screenProps={{id:e}}
//   }

  
render(){
return(
  <View style={{flex:1}}>

<AppContainer screenProps={{counters:this.state.counters, onNavigate:this.navigator}}/>
{/* remember to uncomment this is very very important */}
{/* <Button title="preesses " onPress={this.navigator} /> */}
  </View>
)
}

}

export default MainApp