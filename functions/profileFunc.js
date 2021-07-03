import * as ImagePicker from 'expo-image-picker';
import {Dimensions} from "react-native"
export const handleColorChange2=(state)=>{
  if(state.showdepositform ==false){
    return "green"
  }else{
    return "black"
  }
}

export const handleColorChange3=(state)=>{
    if(state.showdepositform ){
    return "green"
  }else{
    return "black"
  }
}


export const  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      return alert('permission to access images denied');
    } else {
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return {error:true}
      } else {
      
        //   this.setState({ selectedImage: pickerResult.uri });
        return {error:false, result:pickerResult.uri}
      
      }
    }
  };
// this.props.navigation.navigate("screen")
export const getuser=async(token,email,)=>{
    try{
          
const response=await fetch("https://marketdayserver.herokuapp.com/api/user/update/me",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
   token:token,
        email:email,


    })
})
const result=await response.json()
if(result.error ){
return {error:true,result:result,}
}else{
  return{error:false, user:result.message,username:result.message.username,country:result.message.country,phone:`${result.message.phone}`}


  
}


    }catch(err){
   return {error:true,ref:"network"}
    }

}




  export const updateUser=async(token,email,username,country,phone)=>{

const response=await fetch('https://marketdayserver.herokuapp.com/api/user/update',{
  method:"PUT",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({
    token:token,
       email:email, 
       username:username,
    country,
    phone,

  })
})
const result= await response.json()
console.log(result)
if(result.error) return{error:true, errMessage:result.errMessage, save:"save"}
return {save:"saved",error:false}

}


export const handleColorChange=(state)=>{
if(state.disabled){
      return{
     borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:8,
    textAlign:"center",
    backgroundColor:"gray",
    color:"white"
  }
}
else 
return {
     borderColor:"gray",
    borderRadius:50,
    borderWidth:1,
    textAlign:"center",
    margin:7,
    width:Dimensions.get("window").width /1.3,
    padding:8,
    textAlign:"center",
    backgroundColor:"green",
    color:"white"
  }
}
