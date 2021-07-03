import React from "react"
import AwesomeAlert from 'react-native-awesome-alerts';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
    Dimensions
}from "react-native"
import {getBalance} from "../functions/walletTransactions"
import {
  dynamicColorInsertion,
  handleColorChange,
  updateDataBaseBalance,
  handleWithDrawalValidation
} from "../functions/withdrawalFunc"
class Withdrawal extends React.Component{
  is_mounted=true
state={
  withdraw:"Withdraw",
  disable:false,
  refreshing:false,
  show_alert:false
}



  fetchbalance=async()=>{
    try{
const result=await getBalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email)

if(result.error === true){
  alert(result.errMessage)
}else{
  if(this.is_mounted)return this.setState({balance:result.balance})
console.log("withdrawal got result but cant update because withdrawal screen has been unmouted")
}

    }catch(err){
    return this.setState({disabled:false,show_alert:true})

    }
  }

componentDidMount(){
  this.is_mounted=true
this.fetchbalance()
}
componentWillUnmount(){
  this.is_mounted=false
}






handlewithdraw=async()=>{
const isvalid=handleWithDrawalValidation(this.state)
if(isvalid.error) return this.setState({errMessage:isvalid.errMessage})
this.setState({errMessage:""})
try{
  this.setState(prevstate=>({disabled:!prevstate.disabled,withdraw:"proccessing"}))
const result=await updateDataBaseBalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email,parseInt(this.state.amount))

if(result.error==true)return this.setState({errMessage:result.errMessage,disabled:false,withdraw:"Try again"})

this.props.navigation.navigate("Checkmark")
}catch(err){
return this.setState({disabled:false,withdraw:"Try again" , show_alert:true})
}


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
    
{!this.state.balance
?  <Text  style={{    textAlign:"center", fontSize:20,fontWeight:"bold", color:"green"}}>loading avaliable Balance...</Text>
: <Text style={dynamicColorInsertion(this.state.balance)}>Balance:${this.state.balance}</Text>
}
  <View style={styles.mainview}>
     <Text style={{color:"red", textAlign:"center"}}>{this.state.errMessage}</Text>
<Text style={{   textAlign:"center",fontSize:20,fontWeight:"bold",color: 'green'}} >Make withdrawals</Text>
<TextInput placeholder="amount" style={styles.textinput} keyboardType="numeric" value={this.state.amount} onChangeText={text=> this.setState({amount:text})}/>

<TextInput placeholder="bank" style={styles.textinput} value={this.state.bank} onChangeText={text=>this.setState({bank:text})}/>
<TextInput placeholder="Account Number" style={styles.textinput} keyboardType="numeric" value={this.state.account}  onChangeText={text=>this.setState({account:text})}/>

<TouchableOpacity onPress={this.handlewithdraw} disabled={this.state.disabled} >
<Text style={handleColorChange(this.state.disabled)}>{this.state.withdraw}</Text>
</TouchableOpacity>
  </View>



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


</ScrollView>
         
        )
    
    
    }

}

const styles=StyleSheet.create( {
container:{
    flex:1,
backgroundColor:"#E5E5E5",

},
mainview:{
 alignItems:"center",  
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1,
justifyContent:"center"
},
textinput:{
  margin:5,
    textAlign: 'center',
    // color: 'white',
    width:"85%" ,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf:"center"
},


  
    })
export default Withdrawal