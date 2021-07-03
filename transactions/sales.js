

//  import React from "react"
//  import {View , ScrollView,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from "react-native"

//  class sales extends React.Component{
 
// render(){
//   return(
//   <TouchableOpacity>
//  <View style={styles.view}>
//    <View style={styles.card}>

// <View style={styles.text}>
//   <Text style={{color:"green",textAlign:"center", fontSize:20}}>name</Text>
// <Text style={{color:"green",textAlign:"center",fontSize:20}}>$20</Text>
// </View>
     

// <View style={{backgroundColor:"green",height:2,width:"100%",alignSelf:"center",margin:1}}></View>


//    <Image source={{
//     uri:"https://picsum.photos/200/300?grayscale",
  
//  }} style={styles.image}/>

// <Text style={styles.date}>bought on 20 </Text>
// <Text style={styles.date}>pending</Text>
  
//    </View>

  
// </View>
// </TouchableOpacity>
 
  


//   )
// }
//  }
//  const styles=StyleSheet.create({
//    view:{
// backgroundColor:"#E5E5E5",
// flex:1

//    },
//    card:{
//      backgroundColor:"#fff",
//      alignSelf:"center",
//     //  alignItems:"center",
//      width:"99%",
//      height:Dimensions.get('window').height/1.5,
     
//      margin:5,
//    },
//    image:{
//      height:"70%",
//      width:"100%",
//     //  borderRadius:15,
     
//    },
//    text:{
    
//      justifyContent:"space-around",
//      flexDirection:"row",
//     //  position:"absolute",
//      marginTop:3

//    },
//    date:{
//      textAlign:"center",
//      color:"green",
//      fontSize:18
//    }
//  })
//  export default sales
































 import React from "react"
 import {View , ScrollView,StyleSheet,Text,Image,Dimensions,TouchableOpacity} from "react-native"
import AwesomeAlert from 'react-native-awesome-alerts';
import {fetchVerifyProduct} from "../functions/purchaseFunc"
 class Viewsales extends React.Component{
 state={
   show_alert:false,
   productId:"",
   token:"",
   disabled:false

 }
render(){
  // console.log(this.props.purchase)
  return(
  
  <TouchableOpacity


  >
  <View style={styles.view}>
   <View style={styles.card}>

<View style={styles.text}>
  <Text style={{color:"green",textAlign:"center", fontSize:20}}>{this.props.purchase.Listing.name}</Text>
<Text style={{color:"green",textAlign:"center",fontSize:20}}>${this.props.purchase.Listing.price}</Text>
</View>
     

<View style={{backgroundColor:"green",height:2,width:"100%",alignSelf:"center",margin:1}}></View>


   <Image source={{
    uri:`${this.props.purchase.Listing.source}`,
  
 }} style={styles.image}/>

<Text style={styles.date}>bought on {this.props.purchase.Listing.Date} </Text>
<Text style={styles.date}>pending</Text>
  
   </View> 


<AwesomeAlert
          show={this.state.show_alert}
          title="Has The Product Been Shipped"
          message="please make sure you have seen and gotten the product You orderd for, before you press confirm else press cancel if not  you will be scammed!"
          closeOnTouchOutside={false}
          showConfirmButton={true}
          showCancelButton={true}
          cancelText="Cancel"
          confirmText="Confirm"
          confirmButtonColor="green"
          cancelButtonColor="red"
       cancelButtonStyle ={{borderRadius:50,width:Dimensions.get("window").width/2.6,}}
       cancelButtonTextStyle={{textAlign:"center"}}
       onCancelPressed={() => this.setState({show_alert:false})}
           confirmButtonStyle={{borderRadius:50,width:Dimensions.get("window").width/2.9,}}
          confirmButtonTextStyle={{textAlign:"center"}}
          onConfirmPressed={async() =>{
            this.setState({show_alert:false,disabled:true})
           await fetchVerifyProduct(this.state.token,this.state.productId,this.state.salesId)
           this.setState({disabled:false})
            //  fetchVerifyProduct("60913c8b7e99a10022c717bb")
          }}
          titleStyle={{color:"#FC766AFF",margin:6,fontSize:19,textAlign:"center"}}
          contentContainerStyle={{padding:2,margin:2,}}
          messageStyle={{textAlign:"center",fontSize:17,color:"#000000FF"}}
           alertContainerStyle={{width:Dimensions.get("window").width}}
    />
  

</View>

</TouchableOpacity>




  )
}
 }
 const styles=StyleSheet.create({
   view:{
backgroundColor:"#E5E5E5",
flex:1

   },
   card:{
     backgroundColor:"#fff",
     alignSelf:"center",
    //  alignItems:"center",
     width:"99%",
     height:Dimensions.get('window').height/1.5,
     
     margin:5,
   },
   image:{
     height:"70%",
     width:"100%",
    //  borderRadius:15,
     
   },
   text:{
    
     justifyContent:"space-around",
     flexDirection:"row",
    //  position:"absolute",
     marginTop:3

   },
   date:{
     textAlign:"center",
     color:"green",
     fontSize:18
   }
 })
 export default Viewsales