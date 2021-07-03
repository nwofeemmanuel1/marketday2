//action types
export const login="login"
export const log_in_sent="loginsent"



const fetch = require("isomorphic-fetch")
 const login=async()=>{
    const response=await fetch("http://localhost:3000")
    
   if(response.status===200){
    const answer=await response.text()
     return  true
     console.log("hsj")
   }else{
       const errMessage=await response.text()
     throw new Error(errMessage);
  
   
   }
}


