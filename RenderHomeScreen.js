import React, { Component } from 'react';
import {  View,FlatList,RefreshControl ,ScrollView,Dimensions} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Homescreen from "./HomeScreen"
import TopNavigation from "./topnavigation";
import Loadfirst from './loadfirst'
import AwesomeAlert from 'react-native-awesome-alerts';
class RenderHomeScreen extends Component {
is_mounted=true
state={
  animating:false,
    refreshing:false,
    update:false,
    show_alert:false
}

  componentDidMount=async() =>{
    this.is_mounted=true
   const result=await  this.props.screenProps.ongetlisting(this.props.screenProps.user.token)
if(result ===true)return  this.setState({show_alert:true})

  }
// componentWillUnmount(){
// alert("hey")
// }

//   handlelistview=()=>{
//   while(this.props.screenProps.counters.length <=0){
//     return <Loadfirst/>
//   }return <FlatList style={{flex:1
//     }}
// keyExtractor={(item)=>(item._id)}
// data={this.props.screenProps.counters}
// key={this.keyExtractor}
// extraData={this.state.update}
// renderItem={({item})=>(
//    <Homescreen
//               key={item._id}
//               price={item.price}
//               name={item.name}
//               source={item.source}
//               id={item.itemNumber}
//               counters={item}
//               // onNavigate={this.props.screenProps.onNavigate}
//               onNavigate={this.handlenavigator}
//               onAdd={this.props.screenProps.onAdd}

//               TotalItemAdded={this.props.screenProps.TotalItemAdded}
//               onButtonChange={this.props.screenProps.onButtonChange}
//             />
// )


// }

// // updateCellsBatchingPeriod
//      refreshControl={
//           <RefreshControl
//             refreshing={this.state.refreshing}
//             onRefresh={this.onRefresh}
//           />
      
//      }   

// />



// }




  handlelistview=()=>{
  while(this.props.screenProps.counters.length <=0){
    return <Loadfirst/>
  }return <ScrollView
       refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
      
     }   

  >
    {this.props.screenProps.counters.map(item=>
         <Homescreen
              key={item._id}
              price={item.price}
              name={item.name}
              source={item.source}
              id={item.itemNumber}
              counters={item}
              onNavigate={this.handlenavigator}
              onAdd={this.props.screenProps.onAdd}

              TotalItemAdded={this.props.screenProps.TotalItemAdded}
              onButtonChange={this.props.screenProps.onButtonChange}
            />
      )}
  </ScrollView>



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

  handleFilterNavigation = () => {
    this.props.navigation.navigate("RenderFilterScreen")
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

  onRefresh=async()=>{
  this.setState({refreshing:true})
const result=await this.props.screenProps.ongetlisting(this.props.screenProps.user.token)
if(result ===true)return  this.setState({refreshing:false,update:true,show_alert:true})
this.setState({refreshing:false,update:true,})
}
  render() {
  const config = {
      velocityThreshold: 0.1,
      directionalOffsetThreshold: 60
    };
 
 
    return (
     

      <View style={{ flex: 1 }}>
        <TopNavigation onNavigate={this.handlecartNavigator} TotalItemAdded={this.props.screenProps.TotalItemAdded} onIncrement={this.props.screenProps.onIncrement} onTaskScreenNavigate={this.handleTaskNavigator} onFilterNavigation={this.handleFilterNavigation} />
{this.handlelistview() }
 <AwesomeAlert
          show={this.state.show_alert}
          title="Connect to a Network"
          message="please make sure you have an internet connection and try again"
          closeOnTouchOutside={false}
          showConfirmButton={true}
          confirmText="Confirm"
          confirmButtonColor="green"
           confirmButtonStyle={{borderRadius:50,width:Dimensions.get("window").width/1.5,}}
          confirmButtonTextStyle={{textAlign:"center"}}
          onConfirmPressed={() => this.setState({show_alert:false})}
          titleStyle={{color:"#FC766AFF",margin:6,fontSize:19}}
          contentContainerStyle={{padding:2,margin:2,}}
          messageStyle={{textAlign:"center",fontSize:17,color:"#000000FF"}}
           alertContainerStyle={{width:Dimensions.get("window").width}}
        />
      </View>
    // </GestureRecognizer> */}
    );
  }
}
export default RenderHomeScreen;


















