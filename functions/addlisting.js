import * as ImagePicker from 'expo-image-picker';
import {Dimensions,Alert} from "react-native"
import AwesomeAlert from 'react-native-awesome-alerts';
import React from "react"
let uploadedimage=[]
let is_mounted=true

export let update_is_mounted=()=>{
is_mounted=false
}

  export const handleColorchange=(state)=>{
    if(!state.disabled) return {
           borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    
    margin:7,
    width:Dimensions.get("window").width /1.05,
    padding:9,
    textAlign:"center",
    backgroundColor:"green",
    color:"white",
    flexDirection:"row",
      justifyContent:"center",
      
    }
return {
           borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    // textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.05,
    padding:9,
    textAlign:"center",
    backgroundColor:"gray",
    color:"white",
    flexDirection:"row",
      justifyContent:"center"
}

  }




  
  
//   export const submitimage=async(image,totalfetchitem,argument)=>{
//            let base64Img = `data:image/jpg;base64,${image}`;
         
//       let data = {
//         "file": base64Img,
//         "upload_preset": "zs8lu2hy",
//       }

//     try{
 

// const response=await fetch("https://api.cloudinary.com/v1_1/marketday/upload",{
//   method:"POST",
//   headers:{"content-type":"application/json"},
//   body:JSON.stringify(data)
  
// })
// const result=await response.json()
// uploadedimage=[...uploadedimage,result.secure_url]
// if(uploadedimage.length === totalfetchitem){
   
//    console.log(uploadedimage)
//     const finalresult=await createListing(uploadedimage[0]||"",uploadedimage[1]||"",uploadedimage[2]||"",uploadedimage[3]||"",argument)
// if(finalresult.error==true)return argument.setter()
//  argument.navigation.navigate("LoadingIndicator")
// } 
//     }catch(err){
//     argument.setter() //remember we can close the app here because the user has no network
    
//     }
//   }

  

// export const  createListing=async(firstimageurl,secondimageurl,thirdimageurl,fourthimageurl,state)=>{
//    try{
//     const response=await fetch("https://marketdayserver.herokuapp.com/api/users/listings",{
//     method:"POST",
//     headers:{"content-type":"application/json"},
//     body:JSON.stringify({
//         token:state.token,
//         source:firstimageurl,
//         secondsource:secondimageurl,
//         thirdsource:thirdimageurl,
//         fourthsource:fourthimageurl,
//         name:state.state.itemname,
//         price:state.state.price,
//      description:state.state.description,
//      category:state.state.category,
//      seller:state.seller,
//      user:state.user
//     })
// } )


// const result=await response.json()
// return result


//    }catch(err){
//      console.log(err)
// return{ error:true,errMessage:err.message,ref:true}

// }


// }



 export const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      return alert('permission to access images denied');
    } else {

      let pickerResult = await ImagePicker.launchImageLibraryAsync({
              aspect: [4, 3],
          base64: true
      });
      if (pickerResult.cancelled === true) {
        return;
      } else {
return pickerResult
  
      }
    }
  };











export const validateListing=(argument)=>{
 
    if(argument.state.bases){
      // console.log(argument.state.bases.length)
      if(argument.state.itemname.length <=0 )return {errMessage:"item name is required",error:true}
     if(argument.state.itemname.length <3) return {errMessage:"item name must be greater than 3",error:true}
      if(!argument.state.price)return {errMessage:"price is required",error:true}
      if(!argument.state.description)return {errMessage:"description is required",error:true}
      if(argument.state.description.length < 8 )return {errMessage:"description must be atleat 8 characters",error:true}
     if(!argument.state.category) return {errMessage:"please select a category",error:true}

    return { error:false}

    }else{
    return { error:true,ref:true}
    }

  }


  




 