import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { View, Text, Button, Alert } from "react-native";
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
import Profiledeposit from "./profilescreen/profiledeposit"
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
  Profiledeposit: Profiledeposit,
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
   
 userInfo: {


      username: "chidera nwofe",
      passport: "./assets/school.jpg",
      AvailableBalance: 100,

      date: Date(),
      deposit: 0,
      withdrawal: 0,
      pendingSales: 0,
      completedSales: 0,
      itemsBought: 0,
      itemsSold: 0,
      Refund: 1,
      Transaction: "no transactions yet",
      location: ""



    },


    cosmeticsShown: true,
    clothesShown: false,
    camerasShown: false,



  


    cosmetics: [
      {
        ItemNumber: 1,
        id: 1,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid: 1
      },
    ],


    clothes: [
      {
        ItemNumber: 1,
        id: 2,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300?grayscale",
        prevprice: 100,
        sellerid: 1
      },

    ],



    cameras: [


      {
        ItemNumber: 1,
        id: 3,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/200/300/?blur",
        prevprice: 100,
        sellerid: 1
      },
      {
        ItemNumber: 1,
        id: 4,
        price: 200000,
        name: "tanker",
        seller: "john",
        source: "https://picsum.photos/seed/picsum/200/300",
        prevprice: 200000,
        sellerid: 1
      },

      {
        ItemNumber: 1,
        id: 1,
        price: 100,
        name: "red jacket",
        seller: "john",
        source: "https://picsum.photos/id/237/200/300",
        prevprice: 100,
        sellerid: 1
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



  // addlisting=(data)=>{
  //   this.setState(prevstate=>({
  //     counters:[...prevstate.counters,{source: data, id:5}]
  //   }))
  // }


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
     this.setState({ counters: result })
      
        return result
      }

    }catch(err){
       Alert.alert('No Network', 'please make sure you have an internet connection and try again',
    [
      {
        text:"Ok",
        onPress:()=>console.log('app closed') //remember we can close the app here because the user has no network
       }
    
    ]
    )
    
return err.message

    }
  }
   



  

 registeruser=async(username,email,pasword)=>{

try{
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


}catch(err){
   return err.message
}


}

emptycart=()=>{
 this.setState({addedItem:[]})
  
  console.log(addedItem)
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
          username: this.state.userInfo.username,
          onButtonChange: this.handlebtnchanger,

          onlogin: this.loginuser,
          ongetlisting:this.getlistings,
          onregisteruser:this.registeruser,
          onemptycart:this.emptycart,
          onBalanceUpdate:this.handleupdatebalance
        }}
      />
      // {/* remember to uncomment this is very very important */}

      // </View>
    );
  }
}

export default MainApp;













































































































// import React from 'react';
// import {
//   Image, View,
//   Text,
//   TouchableOpacity
// } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';

// class App extends React.Component{


  

//  takeAndUploadPhotoAsync=async()=> {
//   // Display the camera to the user and wait for them to take a photo or to cancel
//   // the action
//   let result = await ImagePicker.launchCameraAsync({
//     allowsEditing: true,
//     aspect: [4, 3],
//   });

//   if (result.cancelled) {
//     return;
//   }

//   // ImagePicker saves the taken photo to disk and returns a local URI to it
//   let localUri = result.uri;
//   let filename = localUri.split('/').pop();

//   // Infer the type of the image
//   let match = /\.(\w+)$/.exec(filename);
//   let type = match ? `image/${match[1]}` : `image`;

//   // Upload the image using the fetch and FormData APIs
//   let formData = new FormData();
//   // Assume "photo" is the name of the form field the server expects
//   formData.append('photo', { uri: localUri, name: filename, type });

//   const response= await fetch("https://marketdayserver.herokuapp.com/api/users/listings/post", {
//     method: 'POST',
//     body: formData,
//     headers: {
//       'content-type': 'multipart/form-data',
//     },
//   });
//   const resultant=await response.text()
//   console.log(resultant)
// }


// // handlefetch=async()=>{
// // try{
// // const response=await fetch("https://marketdayserver.herokuapp.com/api/users/listings/post")
// // const resultan=await response.text()
// // console.log(resultan)
// // }catch(err){
// //   console.log(err)
// // }
// // }
//   render(){
//     return(
//       <View>
//         <  TouchableOpacity onPress={this.takeAndUploadPhotoAsync}>
//         <Text style={{justifyContent:"center", alignItems:"center", fontSize:50}}>upload</Text>
//         </TouchableOpacity>

//       </View>
//     )
//   }
// }
// export default App







// // import React, { useState, useEffect } from 'react';
// // import { Button, Image, View, Platform } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';

// // export default function ImagePickerExample() {
// //   const [image, setImage] = useState(null);

// //   useEffect(() => {
// //     (async () => {
// //       if (Platform.OS !== 'web') {
// //         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
// //         if (status !== 'granted') {
// //           alert('Sorry, we need camera roll permissions to make this work!');
// //         }
// //       }
// //     })();
// //   }, []);

// //   const pickImage = async () => {
// //     let result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     console.log(result);

// //     if (!result.cancelled) {
// //       setImage(result.uri);
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Button title="Pick an image from camera roll" onPress={pickImage} />
// //       {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
// //     </View>
// //   );
// // }


