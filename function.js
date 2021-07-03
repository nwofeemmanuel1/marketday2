
// const login=()=>{
    
// }
// import {login,log_in_sent, loginUser} from "./actions"

//action types
const Registration_sent="registrationsent"
 const log_in_sent="loginsent"



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






const merge=(prev,next )=>Object.assign({},prev,next)
let initialstate={ UserRegistrationDetails:{},userLoginDetails:{ }, appState:[]}

class Store{
    constructor(reducer,initialstate){
this.state=initialstate
this.reducer=reducer
    }
    getState(){
        return this.state
    }
    dispatch(action){
        if(typeof action ==="function"){
            action(this.dispatch.bind(this))
        }

            this.state=this.reducer(this.state,action)
        

       
    }

}

//reducer

const reducer=(state,action)=>{
if(action.type===Registration_sent){
    return merge(
        state,
       {UserRegistrationDetails:{Email:action.payload.Email, userNames:action.payload.userNames, pasword:action.payload.pasword}}
    )
}
return state

if(action.type===Registration_sent){
   return merge(
       state,
       {userLoginDetails:"token"}
   )
}
}

//async action creator remember to export 

 export const loginUser=(email,userNames,pasword)=>dispatch=>{
    dispatch({type:Registration_sent, payload:{Email:email, userNames:userNames, pasword:pasword}})
    login().then(
        ()=> dispatch({type:"registration success"})
    ).catch(err=>{
        dispatch({type:"loginrejectected"})
    })
}

const store=new Store(reducer,initialstate)

// store.dispatch(loginUser())
// console.log(store.getState())


// const dosomething=()=>{
//     console.log("hello world")
// }
 export default store
 