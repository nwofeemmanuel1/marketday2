
import {} from "react-native-gesture-handler"
import React, { Component } from 'react';
import {Card,CardTitle,CardContent, CardAction,CardButton, CardImage} from "react-native-cards"
import {ScrollView,Image,StyleSheet,Text,View,TextInput, TouchableOpacity,Dimensions, Button} from "react-native";

class Checkout extends Component {
    state = {
      id:1,
    showcontact:false
    }
    prices=1

    showpaymentmethod=()=>{
      if(this.state.showcontact==true){



<Text  > Add a payment method to Checkout</Text> 
  }else{
      
          <Text  > Add a payment method to Checkout</Text>  
        
      }
    }
    changepayment=()=>{
this.setState({showcontact:true})
    }



    render() { 
        return (
        
          <ScrollView style={styles.main}>
  


  <Card style={styles.card}>
   <CardImage source={{uri:this.props.source, height:300,width:300}}  
   title= {` $ ${this.props.price}`}
   />
  
   <CardContent text= {this.props.name}/>
  <CardAction
  separator={true}
  inColumn={false}
  >
  
<CardButton style={styles.plus} 
onPress={()=>this.props.onIncrement(this.props.addedItem)}
title="add +"
color="white"

/>



<CardButton  style={styles.minus}
onPress={()=>this.props.onDecrement(this.props.addedItem)}
title="reduce -"
color="white"

/>

  </CardAction>
  </Card>
  




   <View style={styles.separate} />

     
   </ScrollView>
        )}}

  const styles=StyleSheet.create({
    main:{
      flex:1,
      textAlign:"center",
     
    },
    image:{
   alignSelf:"center",
      width:300,
      height:300,
    },



    changeprice:{
     
        
flexDirection:"row",
alignItems:"center",
justifyContent:"space-around"
    },

    plus:{
       backgroundColor:"green",
   
   
     borderRadius:50,
    
    
   
    },
     minus:{
    
       backgroundColor:"gray",
   marginLeft:Dimensions.get("window").width/2,
    borderRadius:50,
     
    },
    price:{
         backgroundColor:"lightblue",
     width:"30%",
     height:35,
    //  borderRadius:"50px",
     paddingTop:8,
     fontSize:18,
     alignItems:"center",
      textAlign:"center",
  
      color:"white"
    },









    checkout:{
      
      backgroundColor:"green",
      width:Dimensions.get("window").width,
      height:35,
      borderRadius:50,
      alignItems:"center",
       textAlign:"center",
      color:"white",
      paddingTop:7
    },
    addpayment:{
   
alignItems:"center",
paddingTop:5,

    },

    csv:{
// backgroundColor:"gray",
      // height: 35,
      textAlign: 'center',
     
      width: Dimensions.get('window').width ,
      borderRadius: 50,
      borderColor: 'gray',
     borderWidth:2
  
    },
    expirydate:{
      // backgroundColor:"gray",
            // height: 35,
            textAlign: 'center',
           
            width: Dimensions.get('window').width ,
            borderRadius: 50,
            borderColor: 'gray',
           borderWidth:2,
           margin:2
        
          },
          pin:{
            // backgroundColor:"gray",
                  // height: 35,
                  textAlign: 'center',
                 
                  width: Dimensions.get('window').width ,
                  borderRadius: 50,
                  borderColor: 'gray',
                 borderWidth:2,
                 margin:2
              
                },

    secondinput:{
      
  color:"white",
 borderColor:"grey",
borderWidth:3,
// borderRadius:"50px",
width:"90%",
height:35,

textAlign:"center",

    },

      thirdinput:{
    color:"white",   
 
 borderColor:"grey",
borderWidth:3,
// borderRadius:"50px",

width:"90%",

height:35,
textAlign:"center"



    },


    paymentmethod:{
      textAlign: 'center',
      margin: 4,
  alignSelf:"center",
      width: Dimensions.get('window').width ,
      height: 35,
      fontSize: 18,
   color:"green",
      paddingTop: 4,
      borderColor: 'green',
      borderRadius: Platform.OS === 'ios' ? 17 : 50,
      borderWidth: 3,
      overflow: 'hidden',
      
     
    },
   
    delete:{
    bottom:100,
    },
    
  separate: {
    // padding: 7,
    backgroundColor:"green",

height:3,
margin:5
  },
    
  })
export default Checkout;
   