import React from "react"
import { 
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
   View,
  RefreshControl,
  Alert,
ActivityIndicator
} from "react-native"
import {getBalance} from "./functions/walletTransactions"
class AnimationView extends React.Component{
  is_mounted=true

  state={
  refreshing :false
  }
  fetchbalance=async()=>{
    try{
const result=await getBalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email)
if(result.error === true){
  // alert(result.errMessage)
}else{
if(this.is_mounted)return this.setState({balance: result.balance})
console.log("returned but cant setstate in an unmounted screen")
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
    }

  }

componentDidMount(){
  this.is_mounted=true
this.fetchbalance()
  
}
componentWillUnmount(){
 this.is_mounted=false
}

 onRefresh=async()=>{
this.setState({refreshing:true})
const result= await this.fetchbalance()
 this.setState({refreshing:false,update:true})

}
 

    render(){

return(
  <ScrollView style={styles.container}
   refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={
              this.onRefresh
            }
              
          />
      
     }   

  >
    
<TouchableOpacity onPress={()=>this.props.navigation.navigate("TransactionScreen")}>
<View style={styles.card} >
 
  <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79fQ8sX-R_nz29ESreWrddyn1KbzNWdgMpthY8SdFR9INQoO3gDjC-mFzfFgcUkwS1Ak&usqp=CAU"}} style={{width:"100%", height:160}}/>
 
  <Text style={styles.heading}>Make deposit or withdraw</Text> 

{!this.state.balance?
<View>
<ActivityIndicator color="green" size="small"/>
<Text style={styles.text}>Loading balance...</Text>
</View>
 : <Text style={styles.text}>Available Balance:${this.state.balance}</Text>}

<Text style={styles.text}>Make a deposit or withdraw</Text>
<Text style={styles.button}>Make Deposit </Text>
<Text>OR</Text>
<Text style={styles.withdrawal}>withdraw</Text>
</View> 

</TouchableOpacity>


<TouchableOpacity onPress={()=>this.props.navigation.navigate("Viewpurchase")}>
<View style={styles.card} >
 
  <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqlh2z-kMg63-cQLsWF0QvJXzNMO4nWDdeFzkgKN7erjDNF986AjmZErpM3y9DsjLS0c&usqp=CAU"}} style={{width:"100%", height:160,alignItems:"center"}}/>
 
  <Text style={styles.heading}>View  Purchase</Text> 
{/* <Text style={styles.text}>Pending product bought: {this.props.screenProps. pendingItemsBought}</Text> */}


<Text style={styles.text}> all purchase made will appear here </Text>

<Text style={{fontSize:15,color:"green"}}> tap on this to explore </Text>
<Text style={styles.button}>View all purchase </Text>

</View> 
</TouchableOpacity>






<TouchableOpacity onPress={()=>this.props.navigation.navigate("Viewsales")}>
<View style={styles.card} >
  {/* style={{width:"100%", height:230}} */}
  <Image source={require("./assets/sales.jpeg")} />
  <Text style={styles.heading}>View All Sales</Text> 
{/* <Text style={styles.text}>Pending product bought: {this.props.screenProps. pendingItemsBought}</Text> */}

<Text style={styles.text}> all sales made will appear here  </Text>

<Text style={{fontSize:15,color:"green"}}> so you can see and ship to the buyer </Text>
<Text style={styles.button}>View Sales </Text>


</View> 
</TouchableOpacity>





</ScrollView>
)
}



}

const styles=StyleSheet.create({
  container:{
flex:1,
backgroundColor:"#E5E5E5"
  },

 card:{
alignItems:"center",
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
// borderColor:"#e1e8ed",
borderWidth:1,
borderColor:"green",
borderRadius:50
 },
 text:{
   textAlign:"center",
   fontStyle:"normal",
   opacity:0.7,
   fontWeight:"bold",
   color:"green"
  },
 heading:{
   fontSize:20
   ,fontWeight:"bold",
   opacity:0.7,
   padding:5,
   color:"#214c63"
  },
 button: {
 
  backgroundColor: 'green',
    alignSelf: 'center',
    width: "95%",
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:7,
    color: 'white',
    overflow:"hidden"
  },
  withdrawal:{
    color:"gray",
   fontWeight:"bold"
  },

  card2:{
alignItems:"center",
marginTop:20,
backgroundColor:"#fff",
// height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1
  },
  transtext:{
color:"gray",
fontFamily:"sans-serif",
fontSize:20,
textAlign:"center"
  },

   transuccess:{
color:"green",
fontFamily:"sans-serif",
fontSize:20,
textAlign:"center"
  }
  
  
})
export default AnimationView





