
import React from "react"
import {Button, 
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  RefreshControl,
} from "react-native"
import {getBalance} from "../functions/walletTransactions"
class Transactions extends React.Component{
 is_mounted=true 
state={
  refreshing:false
}

 onRefresh=async()=>{
this.setState({refreshing:true})
const result= await this.fetchbalance()
 this.setState({refreshing:false,update:true})

}

  fetchbalance=async()=>{
    try{
const result=await getBalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email)
if(result.error === true){
  alert(result.errMessage)
}else{
  if(this.is_mounted)return this.setState({balance:result.balance})
console.log("transactionScreen got the result but cant setState")
}

    }catch(err){
      alert(err.message)
    }

  }

componentDidMount(){
  this.is_mounted=true
this.fetchbalance()
}

componentWillUnmount(){
  this.is_mounted=false
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
 <TouchableOpacity onPress={()=>this.props.navigation.navigate("ProfileScreen",{
  showDepositform:true
})}>
<View style={styles.containerview}>
<Image source={ require("../assets/money.png")} style={ styles.img}/>
{!this.state.balance 
? <Text style={{fontSize:20,fontWeight:"bold",color:"#214c63"}} >Loading balance please wait.. </Text>
:<Text style={{fontSize:20,fontWeight:"bold",color:"#214c63"}} >Available balance:${this.state.balance} </Text>
}
{!this.state.balance
? null
: <Text> {this.props.screenProps.user.user.balance <=0 ? < Text  style={styles.text}>No Available Balance at the moment</Text> : < Text  style={styles.text}> balance Available :${this.state.balance} </Text>} </Text>
}

 
<Text style={styles.button}   >Make a Deposit</Text>
</View>

</TouchableOpacity>




  

<TouchableOpacity onPress={()=>this.props.navigation.navigate("Withdrawal")} >
  <View style={styles.containerview}>

<Image source={ require("../assets/atm-withdrawal.png")} style={ styles.img}/>
{
  !this.state.balance
  ? null
  :< Text style={{fontSize:20,fontWeight:"bold",color:"#214c63"}}> Available Withdrawals: ${this.state.balance} </Text>
}

   < Text  style={styles.text}  >withdrawals take 15 to 20 minutes to complete</Text>
<Text  style={styles.text}>Make a withdrawal</Text>
  
<Text style={styles.button} >Make Withdrawals</Text>
</View>
  
</TouchableOpacity>

</ScrollView> 
)
}
}
const styles=StyleSheet.create({

container:{
     flex:1,
backgroundColor:"#E5E5E5",
},

containerview:{
   alignItems:"center",  
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1,
// justifyContent:"center"
},
img:{
  height:200,
  width:"100%"
},
text:{
textAlign:"center"
},
button:{
  
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
}
})
export default Transactions
