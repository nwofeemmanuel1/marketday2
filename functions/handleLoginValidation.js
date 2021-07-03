import React from "react"
import {Alert} from "react-native"






const handleLoginValidation=(state)=>{
  if(!state.email) return{errMessage:"email is required",  error:true}
  if(!state.pasword){
  return {errMessage:"pasword is required",error:true}
  }else{
    if(state.pasword.length < 8) return{errMessage:"pasword length must be greater than 8 characters" ,error:true}
  }
return {error:false}

}

export default handleLoginValidation

