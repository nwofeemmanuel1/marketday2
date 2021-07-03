import React, { Component } from 'react';
import { ScrollView, Image, StyleSheet, Button, Text, View,ActivityIndicator } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Homescreen from "./HomeScreen"
import TopNavigation from "./topnavigation";
class RenderHomeScreen extends Component {

state={
  animating:false
}
  componentDidMount() {
    //  console.log(this.props.screenProps.user.token)
    this.props.screenProps.ongetlisting(this.props.screenProps.user.token)
    // console.log(this.props.screenProps.counters)

  }




  static navigationOptions = {
    headerShown: false,

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

  handlecartNavigator = () => {
    this.props.navigation.navigate("RenderCheckoutscreen")
    // alert("shii")
  }
  handleTaskNavigator = () => {
    this.props.navigation.navigate("TaskScreen")
  }

  // handleHomeNavigator=()=>{
  //   this.props.navigation.navigate("screen")
  // }

  handleFilterNavigation = () => {
    this.props.navigation.navigate("RenderFilterScreen")
  }

   onSwipeDown=()=> {
  this.setState({animating:true})
  setTimeout(()=>this.setState({animating:false}),3000)
    this.props.screenProps.ongetlisting(this.props.screenProps.user.token)
  alert('swiped')
  }

  handlestyle=()=>{
    if(this.state.animating===false){
      return{
        paddingTop:0
      
      }
    }else{
      return{
        paddingTop:20
      }
    }
  }
  

  render() {
  const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 60
    };
 
    return (
     
//  <GestureRecognizer  onSwipeDown={(state) => this.onSwipeDown(state)} style={{ flex: 1 }}    config={config} >
      <View style={{ flex: 1 }}>
        <TopNavigation onNavigate={this.handlecartNavigator} TotalItemAdded={this.props.screenProps.TotalItemAdded} onIncrement={this.props.screenProps.onIncrement} onTaskScreenNavigate={this.handleTaskNavigator} onFilterNavigation={this.handleFilterNavigation} />

 
         {/* <ActivityIndicator size="small" color="green" animating={this.state.animating}/> */}

        <ScrollView style={this.handlestyle()}  >

          {this.props.screenProps.counters.map((counters) => (



            <Homescreen
              key={counters._id}
              price={counters.price}
              name={counters.name}
              source={counters.source}
              id={counters.itemNumber}
              counters={counters}
              // onNavigate={this.props.screenProps.onNavigate}
              onNavigate={this.handlenavigator}
              onAdd={this.props.screenProps.onAdd}

              TotalItemAdded={this.props.screenProps.TotalItemAdded}
              onButtonChange={this.props.screenProps.onButtonChange}
            />

          ))}
          {/* <Button title="preess " onPress={()=>this.props.screenProps.onNavigate(1)}/>
       <Button title="yii" onPress={()=>this.props.navigation.navigate("screen2")}/> */}
          {/* </ScrollView>  */}
        
        </ScrollView>

      </View>
    // </GestureRecognizer>
    );
  }
}
export default RenderHomeScreen;



