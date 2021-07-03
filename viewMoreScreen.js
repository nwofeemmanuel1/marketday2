
import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {
  ScrollView,
  Image,
  StyleSheet,
TouchableOpacity,
  Text,
  View,
  TextInput,
  Dimensions,

} from 'react-native';
// import Counter from "./components/Counter"
// import { Card } from 'react-native-paper';
class ViewMoreScreen extends React.Component{
  static navigationOptions=({navigation})=>({
    title:navigation.getParam('name'),
    headerTintColor:"green"
  })

  state = {
    inputValue: 'is this still available ?',
    seller: 'school B',
    sent:"",
    refreshing:true
  };


   handlesendmail  =async(subject,text,reciever,token)=>{

try{


const response=await fetch("https://marketdayserver.herokuapp.com/api/seller/mail",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
     
        subject:subject,
        text:text,
        reciever:reciever,
           token:token
    })
})

const result=await response.json()
console.log(result)
if(result.error ==true)return this.setState({sent:"Message was not  Successfully sent"})
 return this.setState({sent:"Message Successfully Sent To Seller"})
}catch(err){
    console.log(err.message)
}


}

callhandler=(subject,text,reciever,token)=>{

  this.handlesendmail(subject,text,reciever,)
}



componentDidMount(){

}

  render(){
    const config = {
      velocityThreshold: 2,
      directionalOffsetThreshold: 20
    };
 

    return(
    
  <ScrollView style={{flex:1}} 
 
  >
     
  
 
      <Image
        source={{ uri:`${this.props.navigation.getParam('source')}`
       

      }}
        style={styles.image}
      />




      <Text>{this.props.navigation.getParam('name')}</Text>

      <Text style={styles.price}> ${this.props.navigation.getParam('price')}</Text>
      {/* <View style={styles.separate} /> */}
      <View style={styles.view2}>
        <Image
          source={require("./assets/school.jpg")}
          style={styles.image2}
        />

        <Text style={styles.name}> {this.props.navigation.getParam('username')}</Text>
      </View>
      
      <View style={styles.view3}>
      <Text style={{textAlign:"center", color:"green"}}>{this.state.sent}</Text>
        <TextInput value={this.state.inputValue} style={styles.input} onChangeText={text=>this.setState({inputValue:text})} />
       <TouchableOpacity onPress={()=>this.callhandler("customer purchase request grant",this.state.inputValue,"enwofe2020@gmail.com")} >
         <Text style={styles.contactSeller}>contact seller</Text>
         </TouchableOpacity>

      </View>


<View style={styles.mapcontainer}>
 <MapView style={styles.map}
initialRegion={{
 latitude: 6.2209,
  latitudeDelta: 2.1551017593605195,
  longitude: 6.9370,
  longitudeDelta: 2.344112545251847,
}}
// onRegionChange={e=>console.log(e)}
>
 <Marker
 coordinate={{
   latitude: 6.2209,
     longitude: 6.9370,
 }}
 />

</MapView> 



{/* <Image source={require("./assets/map.png")}  /> */}


</View>

    


  </ScrollView>

    )
  }
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  image: {
    alignSelf: 'center',
    width: Dimensions.get('window').width,

    height: 300,
  },
  price: {
    color: 'green',
  },

  image2: {
    borderRadius: 50,
    borderWidth: 2,
    width: 50,
    height: 50,
  },
  view2: {
    flexDirection: 'row',
    paddingTop: '5%',
  },
  name: {
    fontSize:19,
    paddingTop: '8%',
    
    color: 'purple',
  },

  view3: {
    alignItems: 'center',
    paddingTop: '8%',
  },
  input: {
    color: 'green',
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 50,
    width: '90%',
    height: 35,
  
    backgroundColor: 'gray',

    textAlign: 'center',
    // alignself: 'center',
  },
  contactSeller: {
    backgroundColor: 'green',
    width: Dimensions.get("window").width,
    height: 35,
    borderRadius: 50,
    paddingTop: 7,
    fontSize: 18,
    textAlign: 'center',
    
    margin: 4,
    color: 'white',
  },
  mapcontainer:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  },
  map:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/2
  }
 
});


export default ViewMoreScreen






















{/* 

<FlatList style={{flex:1}}
keyExtractor={(item)=>item._id}
data={this.props.screenProps.counters}
renderItem={({item})=>(
   <Homescreen
              key={item._id}
              price={item.price}
              name={item.name}
              source={item.source}
              id={item.itemNumber}
              counters={item}
              // onNavigate={this.props.screenProps.onNavigate}
              onNavigate={this.handlenavigator}
              onAdd={this.props.screenProps.onAdd}

              TotalItemAdded={this.props.screenProps.TotalItemAdded}
              onButtonChange={this.props.screenProps.onButtonChange}
            />
)
}

     refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
     }   

/> */}














// import React from 'react';
// import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';



// class App extends React.Component {
//   // const [refreshing, setRefreshing] = React.useState(false);
//    wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

// state={
//   refreshing:true,
//    setRefreshing:false
// }
//   // onRefresh = React.useCallback(() => {
//   //   setRefreshing(true);
//   //   wait(2000).then(() => setRefreshing(false));
//   // }, []);
// onRefresh=async()=>{
//   this.setState({setRefreshing:true})
//    this. wait(2000).then(() => this.setState({setRefreshing:false}));
// }

// render(){
//  return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={this.state.setRefreshing}
        //     onRefresh={this.onRefresh}
        //   />
        // }
//       >
//         <Text>Pull down to see RefreshControl indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
 
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

