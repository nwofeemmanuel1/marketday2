import AnimationView from "../animationView";
import{View,TextInput,Text,TouchableOpacity,Dimensions} from "react-native"


import React from "react"
export const totalPriceCalculator=(addedItem)=>{
let total_price=0
for (let price of addedItem)
total_price=total_price +price.price
return total_price

}

export const handleColorChange=(disabled)=>{
if(disabled) return{
    
    backgroundColor:"gray",
    width:Dimensions.get("window").width,
    height:35,
    borderRadius:50,
    alignItems:"center",
     textAlign:"center",
    color:"white",
    paddingTop:7
  }

 return{
    
    backgroundColor:"green",
    width:Dimensions.get("window").width,
    height:35,
    borderRadius:50,
    alignItems:"center",
     textAlign:"center",
    color:"white",
    paddingTop:7
  } 
}


// seller, should be gotten from addeditem
let addedProduct=[]
export const buyProduct=async(token,buyer,totalPrice,Listing)=>{
Listing.forEach(product=>{
  let productItem={
    seller:product.seller,
    Listing:product._id
  }
  addedProduct=[...addedProduct,productItem]
})
console.log({
  token,
  buyer,
  totalPrice,
  product:addedProduct
})

// console.log("addedproduct  :" +addedProduct[0])


try{
const response=await fetch("https://marketdayserver.herokuapp.com/api/listings/sales",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        token:token,
        buyer:buyer,
        totalPrice:totalPrice,
        product:addedProduct
    })
})
const result=await response.json()
addedProduct=[]
console.log(addedProduct)
console.log(result)
return result

}catch(err){
   return {network:true}
}
}



























































































































// dynamicPayment=()=>{
// if(this.state.balance){
// alert("shh")
// }else{
//   return(
//    alert("hshs")
//   ) 
// }
// }

// buyProduct=async(addedItem)=>{

//  const result= await checkBalance(addedItem,this.props.screenProps.user.token,this.props.screenProps.user.user.email)
// if(result.error){
//   if(this.is_mounted){
// switch (result.ref) {
//   case "balance":
//    this.setState({paywithavailablebalance:"Insufficient Fund",errMessage:result.errMessage,error:true})
//     break;
//    case "network" :
//       this.setState({paywithavailablebalance:"Network Error",errMessage:result.errMessage,error:true})
//     break;
// }

// }
// }   
// }






      
//  handlebuyproduct=async(token,seller,buyer,Listing)=>{
// try{

 
// const response=await fetch("https://marketdayserver.herokuapp.com/api/listings/sales",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//          token:token,
//         seller:seller,
//         buyer:buyer,
//         Listing:Listing,
       
//     })
// })


// const result=await response.json()
// // console.log(result)
// return result
// // if(result.error===true){ 
// //   this.setState({errMessage:result.errMessage})
// // }else{
// // this.props.navigation.navigate("Checkmark")
// // }


// }catch(err){
//     console.log(err.message)
// }


//   }



//    updatedatabasebalance=async(token,email,balance)=>{
// const response=await fetch('https://marketdayserver.herokuapp.com/api/users/balance',{
//   method:"PUT",
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify({
//     token:token,
//        email:email, 
//        balance:balance
//     // country,
//     // phone,

//   })
// })
// const result= await response.json()
// return result
// }

// callbuyproduct=(addedItems,sum)=>{

// this.setState({paywithavailablebalance:"proccessing payment..."})
// addedItems.map(async(addedItem)=>{
//   // let sum=1
//  const seller=addedItem.user.email
//  const buyer= this.props.screenProps.user.user.email
//  const Listing=addedItem._id
//  const token=this.props.screenProps.user.token

//  try{
// const result= await this.handlebuyproduct(token,seller,buyer,Listing)


// if(result.error===true){ 
//   this.setState({errMessage:result.errMessage})
//   this.setState({paywithavailablebalance:"unable to proccess"})
// }else{

//   this.setState({paywithavailablebalance:"pay with available balance"})

// this.props.navigation.navigate("Checkmark")
//  this.props.screenProps.onemptycart() 
// return
// }

// }catch(err){
//   if(err == "Network request failed" ||err.message=="undefined is not an object (evaluating 'result.error')" ){
//   this.setState({paywithavailablebalance:"pay with available balance"})
// Alert.alert("NETWORK ERROR",
// "please make sure you have an internet connection and try again",
// [
//   {text:"OK"}
// ]
// )
// // console.log(err)
// return
//  }
// }
// })

// }


// checkbalance=async(addedItems)=>{

// let sum=0
// for(let item of addedItems)
// sum=sum+ item.price
//     this.setState({paywithavailablebalance:"please wait..."})
//  const updatedbalance= await this.updatedatabasebalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email,sum)

//  if(updatedbalance.error === true) {
//    this.setState({paywithavailablebalance:"insufficient balance"})
//     Alert.alert("Insufficient  Balance", "insufficient balance please pay with card",[{text:"OK"}])
//   }else{
// return await  this.callbuyproduct(addedItems,sum)

//   }



// }