



import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { View, Text, Button, Alert } from "react-native";
import Wallet from "./wallet"
import AccountScreen from "./Accounts";
import Viewtransactions from "./transactions/viewthtransactions"
import LoadingIndicator from "./loadingIndicator"

import Login from "./login";

import RenderFilterScreen from "./profilescreen/renderFilterScreen"
import RenderCheckoutscreen from "./RenderCheckoutscreen";
// import FilterScreen from "./profilescreen/filterScreen"
import RenderHomeScreen from "./RenderHomeScreen";
import ViewMoreScreen from "./viewMoreScreen";

import FirstScreen from "./firstscreen";
import Register from "./Register";
import SuccessScreen from "./SuccessScreen";

import Transactions from "./transactions/deposit"
import Checkout from "./checkout";
import AddListingScreen from "./addlisting";
import Profile from "./profilescreen/profile"
import Profiledeposit from "./profilescreen/profiledeposit"
import Checkmark from "./checkmark";

import Refund from "./transactions/refund"
import Withdrawal from "./transactions/withdrawal"
import BadRequest from "./transactions/badrequest";
import RequestProccessed from "./transactions/requestProccessed";



const MainScreen = createStackNavigator({
  screen: RenderHomeScreen,
  screen2: ViewMoreScreen,
 
  RenderCheckoutscreen: RenderCheckoutscreen,
  TaskScreen:Wallet,
   AddListingScreen:AddListingScreen,
   TransactionScreen:Transactions,
  RenderFilterScreen:RenderFilterScreen,


  ProfileScreen:Profile,
Profiledeposit:Profiledeposit,
 Viewtransactions:Viewtransactions,

 Withdrawal:Withdrawal,
 Refund:Refund,
 BadRequest:BadRequest,
 RequestProccessed:RequestProccessed
});


const TabNavigator = createBottomTabNavigator({
  Home: MainScreen,
  Accounts: AccountScreen,
 
});

const AppNavigator = createSwitchNavigator(
  {
    Home: FirstScreen,
    RegisterScreen: Register,
    SuccessScreen: SuccessScreen,
    LoginScreen: Login,
    // HomeScreenAppNavigator:HomeScreenAppNavigator,
 LoadingIndicator: LoadingIndicator,
Checkmark:Checkmark,


    MainApp: TabNavigator,
    

  },
  {
    initialRouteName: "Home",
  }
);



MainScreen.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName == "RenderCheckoutscreen" || routeName == "screen2" || routeName == "ProfileScreen") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};



const AppContainer = createAppContainer(AppNavigator);

class MainApp extends React.Component {
  state = {
    
    userInfo:{
username:"chidera nwofe",
passport:"./assets/school.jpg",
AvailableBalance:100,

date:Date(),
deposit:0,
withdrawal:0,
pendingSales:0,
completedSales:0,
itemsBought:0,
itemsSold:0,
Refund:1,
Transaction:"no transactions yet",
location:""
    },



     cosmeticsShown:true,
        clothesShown:false,
        camerasShown:false,



    counters: [
      {
        ItemNumber:1,
        id: 1,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/id/237/200/300",
        source2: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid:1
      },
      {
        ItemNumber:1,
        id: 2,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300?grayscale",
          source2: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid:1
      },
      {
        ItemNumber:1,
        id: 3,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300/?blur",
          source2: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid:1
      },
      {
        ItemNumber:1,
        id: 4,
        price: 200000,
        name: "tanker",
        seller: "john",
        source: "https://picsum.photos/seed/picsum/200/300",
          source2: "https://picsum.photos/id/237/200/300",
        prevprice: 200000,
        sellerid:1
      },
    ],


cosmetics:[
  {
        ItemNumber:1,
        id: 1,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid:1
      },
],


clothes:[
    {
        ItemNumber:1,
        id: 2,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300?grayscale",
        prevprice: 100,
        sellerid:1
      },

],



cameras:[


 {
        ItemNumber:1,
        id: 3,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300/?blur",
        prevprice: 100,
        sellerid:1
      },
      {
        ItemNumber:1,
        id: 4,
        price: 200000,
        name: "tanker",
        seller: "john",
        source: "https://picsum.photos/seed/picsum/200/300",
        prevprice: 200000,
        sellerid:1
      },

        {
        ItemNumber:1,
        id: 1,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid:1
      },

],



    addedItem: [

    ],


  };

  // 1/2
  // find(predicate: (this: void, value: any, index: number, obj: any[]) => value is any, thisArg?: any): any
  // find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

  // Returns the value of the first element in the array where predicate is true, and undefined otherwise.

  updatehandler = (counters) => {
    const finder = this.state.addedItem.find((a) => a.id === counters.id);
    if (!finder) {
      this.setState((prevstate) => ({
        addedItem: [...prevstate.addedItem, counters],
      }));
    } else {
      // alert("found")
      Alert.alert(
        "Warning",
        "You are about to Remove an item from cart",
        [
          {
            text: "Remove It",
            onPress: () => {
              const addedItem = this.state.addedItem.filter(
                (addedItem) => addedItem.id !== counters.id
              );
              this.setState({ addedItem });
            },
          },
          { text: "NO" },
        ]
      );
    }
  };


  handleAdditem = (counters) => {
    //  const addedItem= this.state.addedItem.filter(a=>a.id !==counters.id)

    if (this.state.addedItem.length <= 0) {
      this.setState((prevstate) => ({
        addedItem: [...prevstate.addedItem, counters],
      }));
    } else {
      this.updatehandler(counters);
    }
  };

  handleIncrement = (addedItems) => {
    const addedItem = [...this.state.addedItem];
    const index = addedItem.indexOf(addedItems);
    addedItem[index] = { ...addedItems };
    this.setState({ prevprice: addedItem[index].price });
    addedItem[index].price += addedItem[index].prevprice;

    this.setState({ addedItem });
  };

  handleDecrement = (addedItems) => {
    const addedItem = [...this.state.addedItem];
    const index = addedItem.indexOf(addedItems);
    addedItem[index] = { ...addedItems };
    if (addedItem[index].price > addedItem[index].prevprice) {
      addedItem[index].price -= addedItem[index].prevprice;
      this.setState({ addedItem });
    } else {
      Alert.alert(
        "My message",
        "please you cant modify this again try to delete it if you dont like this ",
        [{ text: "done" }]
      );
    }
  };

  handleDelete = (itemid) => {
    const addedItem = this.state.addedItem.filter(
      (addedItem) => addedItem.id !== itemid
    );
    this.setState({ addedItem });
  };


  handlebtnchanger=(counters)=>{

 if (this.state.addedItem.length <= 0) {
 return(
 <Text>Add to cart</Text>
 )
      }else{
const changer = this.state.addedItem.find((a) => a.id === counters.id);
if(changer){
return(
  <Text>
    Remove from cart...
  </Text>
)

}else{
 return(<Text>
    Add to cart
  </Text>)
}
      }

  }


      handleShowCosmetic=()=>{
      this.setState({
            cosmeticsShown:true,
        clothesShown:false,
        camerasShown:false,
      })
  }


  handleShowClothes=()=>{
      this.setState({
            cosmeticsShown:false,
        clothesShown:true,
        camerasShown:false,
      })
  }

  
  handleShowCameras=()=>{
      this.setState({
            cosmeticsShown:false,
        clothesShown:false,
        camerasShown:true,
      })
  }



  // addlisting=(data)=>{
  //   this.setState(prevstate=>({
  //     counters:[...prevstate.counters,{source: data, id:5}]
  //   }))
  // }



  render() {
    return (
  // cosmeticsShown:true,
  //       clothesShown:false,
  //       camerasShown:false,     // <View style={{flex:1}}>

      <AppContainer
        screenProps={{
          counters: this.state.counters,

          balance:this.state.userInfo.AvailableBalance,
    
          pendingSales:this.state.userInfo.pendingSales,
          completedSales:this.state.userInfo.completedSales,

     userInfo:this.state.userInfo,




        onCosmeticsShown:this.state.cosmeticsShown,
        onClothesShown:this.state.clothesShown,
onCamerasSHown:this.state.camerasShown,
onhandleShowCosmetic:this. handleShowCosmetic,
onhandleShowClothes:this.handleShowClothes,
onhandleShowCameras:this.handleShowCameras,
cosmetics:this.state.cosmetics,
clothes:this.state.clothes,
cameras:this.state.cameras,

          addedItem: this.state.addedItem,
          onAdd: this.handleAdditem,
          TotalItemAdded: this.state.addedItem.length,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
          onDelete: this.handleDelete,
          username:this.state.userInfo.username,
          onButtonChange:this.handlebtnchanger
        }}
      />
      // {/* remember to uncomment this is very very important */}

      // </View>
    );
  }
}

export default MainApp;












