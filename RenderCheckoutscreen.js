import AnimationView from "./animationView";
import Checkout from "./checkout"
import React from 'react';
import {totalPriceCalculator,buyProduct,handleColorChange} from "./functions/checkoutFunc"

import {Dimensions,Text,View,ScrollView,TouchableOpacity,StyleSheet,TextInput ,Alert}from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

class  RenderCheckoutScreen extends React.Component{

is_mounted=true
 state={ 
  
   showcontact:false,
   showfirstView:true,
   balance:false,
   price:[],
   paywithavailablebalance:"Pay with available balance",
   errMessage:"",
   error:false,
   disabled:false,
   show_alert:false
}

handleBuyProduct=async(token,buyer,totalPrice,Listing)=>{
  this.setState({disabled:true,paywithavailablebalance:"Proccessing please wait..." ,errMessage:""})
const result=await buyProduct(token,buyer,totalPrice,Listing)
if(result.error){
  if(this.is_mounted) return this.setState({errMessage:result.errMessage,disabled:false,paywithavailablebalance:"Pay with available balance"})
  return console.log("error gotten but cant setstate in unmounted screen")
}
if(result.network){
   if(this.is_mounted)return this.setState({disabled:false,paywithavailablebalance:"Pay with available balance",show_alert:true})
     return Alert.alert("Connect to a Network","please make sure you have an internet connection and try again",[{text:"OK"}])
}
if(this.is_mounted){
 this.props.screenProps.onemptyCart()
this.props.navigation.navigate("Checkmark")
}
this.props.screenProps.onemptyCart()
console.log("everything is ok you have bought a product ")

}

dynamicView=()=>{
  if(this.props.screenProps.addedItem.length <=0){

    return(
      <View>
    <AnimationView/>
    </View>
    )

  }else{
return (
 
 <View>
      <View style={styles.addpayment} >
 {
this.state.showcontact ?    <View style={styles.addpayment} >
 
  <Text  > Add a payment method to Checkout </Text> 
 <TextInput placeholder="csv" style={styles.csv} keyboardType="numeric"/>
 <TextInput  placeholder="expiry date" style={styles.expirydate} keyboardType="numeric"/>
<TextInput placeholder="pin" style={styles.pin} keyboardType="numeric"/>
<TouchableOpacity><Text style={styles.checkout}>checkout</Text></TouchableOpacity>
    </View>

 :
 <View>
  
<TouchableOpacity 
   onPress={()=>this.handleBuyProduct(this.props.screenProps.user.token,
   this.props.screenProps.user.user.email,
   totalPriceCalculator(this.props.screenProps.addedItem),
   this.props.screenProps.addedItem
   ) }
   disabled={this.state.disabled}
>
 <Text style={{textAlign:"center",color:"red",fontSize:20}}>{this.state.errMessage}</Text>
 <Text style={{fontSize:20}}>Total price:  ${totalPriceCalculator(this.props.screenProps.addedItem)}</Text>
<Text style={handleColorChange(this.state.disabled)}>{this.state.paywithavailablebalance}</Text>
</TouchableOpacity>
                            <Text>OR</Text>
<TouchableOpacity onPress={()=>this.setState({showcontact:true})}><Text style={styles.debitcardpayment}>pay with debit card</Text></TouchableOpacity>

</View>
  }
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
 </View>


)
  }

}





componentDidMount(){
  this.is_mounted=true
}
componentWillUnmount(){
  this.is_mounted=false 
}
  render(){

    return(
      <ScrollView style={{flex:1}}>
 

   
    { 
    this.props.screenProps.addedItem.map(
      addedItem=><Checkout key={addedItem._id} price={addedItem.price} name={addedItem.name} source={addedItem.source}
      onIncrement={this.props.screenProps.onIncrement}
      onDecrement={this.props.screenProps.onDecrement}
      id={addedItem.id}
      addedItem={addedItem}
      onDelete={this.props.screenProps.onDelete}
      />
      )
    }
   
{this.dynamicView(this.props.screenProps.addedItem)}

</ScrollView>

    )
  }
}



const styles=StyleSheet.create({
  
  addpayment:{
 
alignItems:"center",
paddingTop:5,

  },

  csv:{
// backgroundColor:"gray",
    // height: 35,
    textAlign: 'center',
   
    width: Dimensions.get('window').width ,
    borderRadius: 50,
    borderColor: 'gray',
   borderWidth:2

  },
  expirydate:{
    // backgroundColor:"gray",
          // height: 35,
          textAlign: 'center',
         
          width: Dimensions.get('window').width ,
          borderRadius: 50,
          borderColor: 'gray',
         borderWidth:2,
         margin:2
      
        },
        pin:{
          // backgroundColor:"gray",
                // height: 35,
                textAlign: 'center',
               
                width: Dimensions.get('window').width ,
                borderRadius: 50,
                borderColor: 'gray',
               borderWidth:2,
               margin:2
            
              },

  paymentmethod:{
    textAlign: 'center',
    margin: 4,
alignSelf:"center",
    width: Dimensions.get('window').width ,
    height: 35,
    fontSize: 18,
 color:"green",
    paddingTop: 4,
    borderColor: 'green',
    borderRadius: Platform.OS === 'ios' ? 17 : 50,
    borderWidth: 3,
    overflow: 'hidden',
    
   
  },


    debitcardpayment:{
    textAlign: 'center',
  color:"gray",
  margin:4,
  fontSize:19
   
  },
 
 checkout:{
   backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.5,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    overflow:"hidden"
    
 }
  
})
export default RenderCheckoutScreen