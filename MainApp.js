import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import {  Text,  Alert } from "react-native";
import Wallet from "./wallet"
import AccountScreen from "./Accounts";
import Viewpurchase from "./transactions/viewpurchase"
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
// import Profiledeposit from "./profilescreen/profiledeposit"
import Checkmark from "./checkmark";

import Refund from "./transactions/refund"
import Withdrawal from "./transactions/withdrawal"
import BadRequest from "./transactions/badrequest";
import RequestProccessed from "./transactions/requestProccessed";
import Animate from "./animate";
import Viewsales from "./transactions/viewsales"

const MainScreen = createStackNavigator({
  screen: RenderHomeScreen,
  screen2: ViewMoreScreen,

  RenderCheckoutscreen: RenderCheckoutscreen,
  TaskScreen: Wallet,
  AddListingScreen: AddListingScreen,
  TransactionScreen: Transactions,
  RenderFilterScreen: RenderFilterScreen,


  ProfileScreen: Profile,
  Viewpurchase: Viewpurchase,

  Withdrawal: Withdrawal,
  Refund: Refund,
  BadRequest: BadRequest,
  RequestProccessed: RequestProccessed,
  Viewsales:Viewsales
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
    Checkmark: Checkmark,
Animate:Animate,

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
    user: {},
    count: [],
      counters:[  ],
   update:false,


    cosmeticsShown: true,
    clothesShown: false,
    camerasShown: false,

    addedItem: [

    ],


  };

  updatehandler = (counters) => {
    const finder = this.state.addedItem.find((a) => a._id === counters._id);
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
                (addedItem) => addedItem._id !== counters._id
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
console.log(addedItem[index].price)
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
      (addedItem) => addedItem._id !== itemid
    );
    this.setState({ addedItem });
  };


  handlebtnchanger = (counters) => {

    if (this.state.addedItem.length <= 0) {
      return (
        <Text>Add to cart</Text>
      )
    } else {
      const changer = this.state.addedItem.find((a) => a._id === counters._id);
      if (changer) {
        return (
          <Text>
            Remove from cart...
          </Text>
        )

      } else {
        return (<Text>
          Add to cart
        </Text>)
      }
    }

  }


  handleShowCosmetic = () => {
    this.setState({
      cosmeticsShown: true,
      clothesShown: false,
      camerasShown: false,
    })
  }


  handleShowClothes = () => {
    this.setState({
      cosmeticsShown: false,
      clothesShown: true,
      camerasShown: false,
    })
  }


  handleShowCameras = () => {
    this.setState({
      cosmeticsShown: false,
      clothesShown: false,
      camerasShown: true,
    })
  }



  loginuser = async (email, pasword) => {
    try {

      const response = await fetch("https://marketdayserver.herokuapp.com/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({

          email: email,
          pasword: pasword
        })
      })
      const result = await response.json()
      if (result.error) {
        return result
      } else {
        this.setState({ user: result })
        return result
      }




    } catch (err) {
      return err.message
    }

  }


  getlistings = async (token) => {
    try{
    const response = await fetch("https://marketdayserver.herokuapp.com/api/listings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token
      })
    })
   const result = await response.json()
      if (result.error) {
        return result
      }else  {
     this.setState({ counters: result, })
     this.setState({update:true})
       setTimeout(()=>this.setState(prevstate=>({update:!prevstate.update})),1000)
        return result
       
      }

    }catch(err){
return this.show_alert=true
    }
  }
   



  

 registeruser=async(username,email,pasword)=>{
const response=await fetch("https://marketdayserver.herokuapp.com/api/register",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        username:username,
        email:email,
        pasword:pasword
    })
})

const result = await response.json()
      if (result.error) {
        return result
      } else {
        this.setState({ user: result })
        return result
      }





}

emptycart=()=>{
 this.setState({addedItem:[]})

}



  render() {
    return (
      // cosmeticsShown:true,
      //       clothesShown:false,
      //       camerasShown:false,     // <View style={{flex:1}}>
      <AppContainer
        screenProps={{
          counters: this.state.counters,

          user: this.state.user,

          onCosmeticsShown: this.state.cosmeticsShown,
          onClothesShown: this.state.clothesShown,
          onCamerasSHown: this.state.camerasShown,
          onhandleShowCosmetic: this.handleShowCosmetic,
          onhandleShowClothes: this.handleShowClothes,
          onhandleShowCameras: this.handleShowCameras,
          cosmetics: this.state.cosmetics,
          clothes: this.state.clothes,
          cameras: this.state.cameras,

          addedItem: this.state.addedItem,
          onAdd: this.handleAdditem,
          TotalItemAdded: this.state.addedItem.length,
          onIncrement: this.handleIncrement,
          onDecrement: this.handleDecrement,
          onDelete: this.handleDelete,
         
          onButtonChange: this.handlebtnchanger,

          onlogin: this.loginuser,
          ongetlisting:this.getlistings,
          onregisteruser:this.registeruser,
          onemptyCart:this.emptycart,
          onBalanceUpdate:this.handleupdatebalance,
          onUpdate:this.state.update
        }}
      />
      // {/* remember to uncomment this is very very important */}

      // </View>
    );
  }
}

export default MainApp;















































// import React, { useState } from "react";
// import { View, Picker, StyleSheet,Image,Dimensions ,Text} from "react-native";

// const App = () => {
//   const [selectedValue, setSelectedValue] = useState("java");
//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={selectedValue}
//         style={{ height: Dimensions.get("window").height, width:Dimensions.get("window").width  }}
//         onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//       >
//        <Picker.Item label="Java" value="java"  />
//         <Picker.Item label="JavaScript" value="js" />
//       </Picker>
//       {/* <Picker>
        
//       </Picker> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     alignItems: "center"
//   }
// });

// export default App;







