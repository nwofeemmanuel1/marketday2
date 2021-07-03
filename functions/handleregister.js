
 const handleregister=(state)=>{
    if(!state.username) return{errMessage:"username is required",  error:true}
     if(state.username.length <3) return{errMessage:"username must be greater than 3 characters",  error:true}
  if(!state.email) return{errMessage:"email is required",  error:true}
  if(!state.pasword){
  return {errMessage:"pasword is required",error:true}
  }else{
    if(state.pasword.length < 8) return{errMessage:"pasword length must be greater than 8 characters" ,error:true}
  }
return {error:false}

}

export default handleregister
