


// import React from "react"
// import { ScrollView,StyleSheet,TouchableOpacity,Text,StatusBar,Image, View,Dimensions,} from "react-native"
// import {Card,CardTitle,CardContent, CardAction,CardButton, CardImage} from "react-native-cards"
// // import TopNavigation from "./topnavigation"
// class Viewtransactions extends React.Component{



// transactionid=()=>{
  
//     if(this.props.screenProps. user.user.balance >=1){
// return(
// <View style={styles.card} >
 
//   <Image source={require("../assets/money.png")} style={{width:"100%", height:160}}/>
 
//   <Text style={styles.heading}> ${this.props.screenProps.user.user.balance} deposit found</Text> 
// <Text style={styles.text}>you made a deposit of $ {this.props.screenProps.user.user.balance} </Text>
// <Text style={styles.text}>this user account was registerd on  {this.props.screenProps.user.user.date}</Text>
// {/* <Text style={styles.button}>Request Refund </Text> */}
// </View> 
// )
//     }else{
//       return(
// <View style={styles.card} >
 
//   <Image source={require("../assets/money.png")} style={{width:"100%", height:160}}/>
 
//   <Text style={styles.heading}>No transactions made</Text> 
// <Text style={styles.secondtext}>newly bought products or  newly sold product will appear here until it gets to the owner</Text>
// <Text style={styles.secondtext}>but you havent made any transaction buy a product to start with</Text>

// </View> 
//       )


//     }
  
// }


//     render(){
   
// return(
//   <ScrollView style={styles.container}>
    
// <TouchableOpacity onPress={()=>this.props.navigation.navigate("Refund")} >
// <View style={styles.card} >
 
//   <Image source={require("../assets/money.png")} style={{width:"100%", height:160}}/>
 
//   <Text style={styles.heading}>Request Refund from seller</Text> 
// <Text style={styles.text}>if the items you bought are not good</Text>
// <Text style={styles.text}>then we can get you your money bac</Text>
// <Text style={styles.button}>Request Refund </Text>
// </View> 

// </TouchableOpacity>



// <TouchableOpacity>
// {this.transactionid()}
// </TouchableOpacity>






// </ScrollView>
// )
// }



// }

// const styles=StyleSheet.create({
//   container:{
// flex:1,
// backgroundColor:"#E5E5E5"
//   },

//  card:{
// alignItems:"center",
// marginTop:20,
// backgroundColor:"#fff",
// height:390,
// width:"85%",
// alignSelf:"center",
// borderColor:"#e1e8ed",
// borderWidth:1
//  },
//  text:{
//    textAlign:"center",
//    fontStyle:"normal",
//    opacity:0.7,
//    fontWeight:"bold"
//   },
//   secondtext:{
//   textAlign:"center",
//    fontStyle:"italic",
//    opacity:0.7,
//    fontWeight:"bold"
//   },

//  heading:{
//    fontSize:20
//    ,fontWeight:"bold",
//    opacity:0.7,
//    padding:5,
//    color:"green"
//   },
//  button: {

//   backgroundColor: 'green',
//     alignSelf: 'center',
//     width: "95%",
//     // marginLeft: Dimensions.get('window').width /8,
//     height: 35,
//     borderRadius: Platform.OS==="ios" ? 17 :50,
 
//     paddingTop: 6,
//     fontSize: 18,
//     textAlign: 'center',
//     margin:7,
//     color: 'white',
//     overflow:"hidden"
//   },
//   withdrawal:{
//     color:"gray",
//    fontWeight:"bold"
//   },

//   card2:{
// alignItems:"center",
// marginTop:20,
// backgroundColor:"#fff",
// // height:390,
// width:"85%",
// alignSelf:"center",
// borderColor:"#e1e8ed",
// borderWidth:1
//   }
  
// })
// export default Viewtransactions

















import Nosales from "./nosale"
import Loadfirst from '../loadfirst'
import Purchase from "./purchase"
 import React from "react"
 import {View , ScrollView,StyleSheet,Text,Image} from "react-native"

 
 class Viewpurchase extends React.Component{
is_mounted=true
 state={
//    purchaser:""
 }

 fetchPurchase=async(token,buyer)=>{

try{


const response=await fetch("https://marketdayserver.herokuapp.com/api/listings/sales/viewpurchase",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        token:token,
        buyer:buyer,
       
        
    })
})

const result=await response.json()
console.log( result)
if(this.is_mounted){
this.setState({purchaser:result,})
console.log("answer" + this.state.answer)
}

}catch(err){
    console.log(err.message)
}


}
// "gsgfysygy"

 
 componentDidMount() {
     this.is_mounted=true
  this.fetchPurchase(this.props.screenProps.user.token,this.props.screenProps.user.user.email)
 }
componentWillUnmount(){
    this.is_mounted=false
}

handlechanger=()=>{
     while (!this.state.purchaser )  {
return <Loadfirst />
   } if(this.state.purchaser.error==true){
       return <Nosales/>
   }else{
        return this.state.purchaser.message.map(p=><Purchase key={p._id}   purchase={p} user={this.props.screenProps.user}/> )
   }
}


render(){
  return(
<ScrollView>
  
    
      <ScrollView style={{flex:1}}>
  
     
{

    this.handlechanger()  

}
</ScrollView>
      

  </ScrollView>


  )
  }
 }
 export default Viewpurchase