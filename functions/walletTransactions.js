import * as ImagePicker from 'expo-image-picker';
import {  Dimensions}from "react-native"
 export const  getBalance=async(token,email)=>{
const response=await fetch("https://marketdayserver.herokuapp.com/api/user/viewbalance",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
      token:token,
        email:email,

    })
})
const result=await response.json()
return result
 }


 export const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      return alert('permission to access images denied');
    } else {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      } else {
      return pickerResult
        
        
      
      }
    }
  };
export const validateCArd=async(state)=>{
if(!state.cardnumber) {
  return {errMessage:"card number is required",error:true}
}else{
if(!+state.cardnumber){
 return {errMessage:"card number must be a valid number", error:true}
}else{
  if(state.cardnumber.length < 15 || state.cardnumber.length > 16)return {errMessage:"card number must be a greater than 15 and less than 17 characters",error:true}
}
}
if(!state.expirydate) {
  return {errMessage:"expiry date is required",error:true}
}else{
if(!+state.expirydate){
 return  {errMessage:"expiry date must be a number",error:true}
}else{
  if(state.expirydate.length < 3 ||state.expirydate.length >5)return {errMessage:"expiry date must be a greater than 3 and less than 5 characters",error:true}
}
}

if(!state.csv) {
  return {errMessage:"csv is required",error:true}
}else{
if(!+state.csv){
 return  {errMessage:"csv must be a number",error:true}
}else{
  if(state.csv.length < 3 || state.csv.length >5) return {errMessage:"csv must be a greater than 3 and less than 5 characters",error:true}
}
}



if(!state.amount) {
  return {errMessage:"amount is required",error:true}
}else{
if(!+state.amount){
 return {errMessage:"amount must be a number",error:true}
}else{
  if(state.amount < 0)return {errMessage:"amount must be a greater than 0",error:true}
}
}
return {message:"validated",error:false}


}





export const handleColorchange=(state)=>{
  if(!state.disabled){
 return{
    borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:10,
    textAlign:"center",
    backgroundColor:"green",
    color:"white"
}
  }else{
    return{
    borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:10,
    textAlign:"center",
    backgroundColor:"gray",
    color:"white"
} 
  }
 
}




export const makeDeposit=async(token,email,cardnumber,expirydate,csv,amount)=>{
const response=await fetch('https://marketdayserver.herokuapp.com/api/users/deposit',{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
    token,
    email,
 cardnumber,
     
     expirydate,
     csv,
     amount
    // country,
    // phone,

  })
})
const result= await response.json()
return result
}
