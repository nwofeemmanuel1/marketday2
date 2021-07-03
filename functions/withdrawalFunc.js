import{Dimensions} from "react-native"
 export const dynamicColorInsertion=(balance)=>{
       if( balance <=0){
           return{
               textAlign:"center",
         fontSize:20,fontWeight:"bold",
         color:"red" 
           }
       }else{
           return{
               textAlign:"center",
         fontSize:20,fontWeight:"bold",
         color:"green"  
           }
       }
    }


    export const handleColorChange=(disabled)=>{
      if(disabled ){
        return {
    backgroundColor: 'gray',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.5,
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
      }else{
        return  {
    backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.5,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:7,
    color: 'white',
    overflow:"hidden",
    
  }
      }
    }





export const updateDataBaseBalance=async( token,email,amount)=>{

  

    const response= await fetch("https://marketdayserver.herokuapp.com/api/user/viewbalance/debit",{
         method:"PUT",
         headers:{"content-type":"application/json"},
         body:JSON.stringify({token,email,amount})
     })
    const result= await response.json()
console.log(result)
return result
 }
 








export const handleWithDrawalValidation=(state)=>{
// if(!state.balance) return {errMessage:"unexpected error please make sure you have an internet connection and reload ", error:true}
if(!state.amount) return {errMessage:"amount is required", error:true}
if(! +state.amount || state.amount <0) return {errMessage:"amount must be a number and greater than 0" , error:true}
// if(state.amount > state.balance) return {errMessage:"amount must not be greater than balance" , error:true}

if(!state.bank) return {errMessage:"bank is required" , error:true}


if(!state.account) return {errMessage:"account number is required" , error:true}
if(! +state.account) return {errMessage:"account number must be a number" , error:true}
if(state.account.length < 10) return {errMessage:"account number is must be atleast 10 characters" , error:true}
if(state.account.length > 10) return {errMessage:"account number is must not be greater than 10 characters" , error:true}

return {errMessage:"" , error:false}

}










 