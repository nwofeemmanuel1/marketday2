
import Loadfirst from '../loadfirst'
 import React from "react"
 import {View , ScrollView,StyleSheet,Text,Image} from "react-native"
import Sales from "./sales"
import Nosales from "./nosale"
 class Viewsales extends React.Component{
is_mounted=true
  state={

  }

   fetchSales=async(token,seller)=>{
try{


const response=await fetch("https://marketdayserver.herokuapp.com/api/listings/sales/viewsales",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        token:token,
        seller:seller,
       
        
    })
})

const result=await response.json()
// console.log(result)
if(result.error ==true){
  if(this.is_mounted){
    this.setState({sales:result}) 
    console.log("unmouted!") 
  }
}else{
    if(this.is_mounted)return this.setState({sales:result.message})
    // console.log("result unmouted!!") 
  }

// if(result.error){
//    if(this.is_mounted){
//   this.setState({sales:result}) 
//     console.log("unmouted!")
//    }
//    else
//    console.log("unmounted cant setstate")
 
// }else{
//   if(this.is_mounted)return this.setState({sales:result.message}) 
//   console.log("result unmouted!!")
// }
// // console.log(result)

// }catch(err){
//  alert(err.message)
// }
}catch(err){
  alert("errorr" + err.message)
}

}





handleList=()=>{
     while (!this.state.sales)  {
return <Loadfirst/>
   } if(this.state.sales.error===true){
     return <Nosales/>
   }else{
    return  this.state.sales.map(sale=><Sales key={sale._id} 
   purchase={sale}
   />)

   }

}

state={}
componentDidMount(){
this.is_mounted=true
this.fetchSales(this.props.screenProps.user.token,this.props.screenProps.user.user.email)

}

componentWillUnmount(){
   this.is_mounted=false
}

render(){
  return(
<ScrollView style={{flex:1}}>
  
    

{this.handleList()}
      

  </ScrollView>


  )
  }
 }
 export default Viewsales



















































