import {Alert} from "react-native"


 export const fetchVerifyProduct=async(token,id,salesId)=>{
    const response= await fetch("https://marketdayserver.herokuapp.com/api/user/verifyProduct",{
         method:"DELETE",
         headers:{"content-type":"application/json"},
         body:JSON.stringify({token,id,salesId})
     })
    const result= await response.json()
    console.log(result)
    if(result.error){
        Alert.alert("An Error Occured", result.errMessage,[{text:"OK"}])
    }else{
        Alert.alert("Success","Success this Product has been Verified successfully Refresh to see impact",[{text:"OK"}])
    }
 }

//  fetchuser('60c3435be6aad615846cdcdd')



//  const fetchuser=async( token,id,salesId)=>{
//     const response= await fetch("http://localhost:5000/api/user/verifyProduct",{
//          method:"DELETE",
//          headers:{"content-type":"application/json"},
//          body:JSON.stringify({token,id,salesId})
//      })
//     const result= await response.json()
//     console.log(result)
//  }
//  fetchuser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYzcyNmE5YWZkMjcwMTU1NDAzMDNjOSIsImlhdCI6MTYyMzY2NDI5N30.gfoXHYYSIapS9E9w_MITuHlR1g-Otf_NDxgAVJ3x0ts',"60c72dec7d6eb00e18a17aed","60c7340a1dc0151694fc1916")
