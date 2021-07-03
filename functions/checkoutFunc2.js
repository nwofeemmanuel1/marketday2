
export const callbuyproduct=(addedItems,sum)=>{

this.setState({paywithavailablebalance:"proccessing payment..."})
addedItems.map(async(addedItem)=>{
  // let sum=1
 const seller=addedItem.user.email
 const buyer= this.props.screenProps.user.user.email
 const Listing=addedItem._id
 const token=this.props.screenProps.user.token

 try{
const result= await this.handlebuyproduct(token,seller,buyer,Listing)


if(result.error===true){ 
  this.setState({errMessage:result.errMessage})
  this.setState({paywithavailablebalance:"unable to proccess"})
}else{

  this.setState({paywithavailablebalance:"pay with available balance"})

this.props.navigation.navigate("Checkmark")
 this.props.screenProps.onemptycart() 
return
}

}catch(err){
  if(err == "Network request failed" ||err.message=="undefined is not an object (evaluating 'result.error')" ){
  this.setState({paywithavailablebalance:"pay with available balance"})
Alert.alert("NETWORK ERROR",
"please make sure you have an internet connection and try again",
[
  {text:"OK"}
]
)
// console.log(err)
return
 }
}
})

}





export const checkbalance=async(addedItems)=>{

let sum=0
for(let item of addedItems)
sum=sum+ item.price
    this.setState({paywithavailablebalance:"please wait..."})
 const updatedbalance= await this.updatedatabasebalance(this.props.screenProps.user.token,this.props.screenProps.user.user.email,sum)

 if(updatedbalance.error === true) {
   this.setState({paywithavailablebalance:"insufficient balance"})
    Alert.alert("Insufficient  Balance", "insufficient balance please pay with card",[{text:"OK"}])
  }else{
return await  this.callbuyproduct(addedItems,sum)

  }



}