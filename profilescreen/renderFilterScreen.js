import React from "react"

import {
 View,
 Text,
 ScrollView
}from "react-native" 
import { dynamicViewInsertion} from "../functions/renderFilteration"
import FilterNavigation from "./filterNavigation"
import FilterScreen from "./filterScreen"
class RenderFilterScreen extends React.Component{
    static navigationOptions={
        headerShown:false
    }

    
  handlenavigator = (id, source, name, price, usericon, username) => {
    this.props.navigation.navigate("screen2", {
      id: id,
      source: source,
      name: name,
      price: price,
      usericon: usericon,
      username: username
    })
  }

//  handlenavigator=(id,source,name,price)=>{
//     this.props.navigation.navigate("screen2",{
//       id:id,
//       source:source,
//       name:name,
//       price:price
//     })
//   }
    render(){
    
        return (
            <View style={{flex:1}}>
   <FilterNavigation onCosmeticShown={this.props.screenProps.onhandleShowCosmetic} onClothesShown={this.props.screenProps.onhandleShowClothes} onCamerasShown={this.props.screenProps.onhandleShowCameras}/>
            <ScrollView style={{flex:1}}>
{
dynamicViewInsertion({
    counters:this.props.screenProps.counters,
     onCosmeticsShown:this.props.screenProps.onCosmeticsShown,
  onClothesShown: this.props.screenProps.onClothesShown,
   onCamerasSHown:this.props.screenProps.onCamerasSHown,
  onButtonChange: this.props.screenProps.onButtonChange,
  onAdd:this.props.screenProps.onAdd,
  handlenavigator:this.handlenavigator
})
}

            </ScrollView>
</View>
        )
    }
}
export default RenderFilterScreen













