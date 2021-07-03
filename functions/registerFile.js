


export const handlesubmit=async()=>{
try{

   this.setState({disabled:true,register:"Proccessing..."})
const response=await this.props.screenProps.onregisteruser(this.state.username,this.state.email,this.state.pasword)
console.log(response)
if (response.error === true){ 
  this.setState({errMessage:response.errMessage, disabled:false, register:"Register"})

}else if(response.error === false){
this.setState({disabled:false,register:"success ..."})
this.props.navigation.navigate("SuccessScreen")
// alert('successfull')
}else{

  this.setState({disabled:false,register:"Register"})
  Alert.alert('No Network', 'please make sure you have an internet connection and try again',
    [ {
        text:"Ok",
        onPress:()=>console.log('app closed') //remember we can close the app here because the user has no network
       }  ])
}
 


}catch(err){
 this.setState({disabled:false,register:"Register" , errmessage:err.message})
}

}

