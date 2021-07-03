import React from "react";
import {
View,
Text,
StyleSheet,
TouchableOpacity,
ScrollView,
Dimensions,
Image,
StatusBar
}from "react-native"

class FilterScreen extends React.Component{
    static navigationOptions={
        headerShown:false
    }

    functioncaller=()=>{
        this.props.onhandleAdd (this.props.counters)
    }
    render(){
  

        return(
           
<View style={{flex:1}}>
      
      <View
  style={{
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    
  }}
/>

    {/*
       */}
          <View style={styles.product}>
            <Text style={styles.itemname}> {this.props.counters.name}</Text>
            <Text style={styles.price}>${this.props.counters.price}</Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.onNavigate(
             this.props.counters._id,
           this.props.counters.source,
          this.props.counters.name,
          this.props.counters.price,
            this.props.counters.user.userIcon,
            this.props.counters.user.username
          
          )}>
            <Image
              style={styles.ImageTobeSold}
              source={{uri:this.props.counters.source}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.functioncaller} >
            <Text style={styles.button}>{ this.props.onhandlebtnchange(this.props.counters)} </Text>
          </TouchableOpacity>
        <View style={styles.separate} />


</View>

  
    
    



        )
    }
}
const styles=StyleSheet.create({
   containerstyle:{
       flex:1,
    
   } ,
   container:{
   alignItems:'center'
   },

  product: {
    flexDirection: 'row',
    bottom:3,
    margin:4
  },

  itemname: {
    color: 'green',
   
    fontSize: 17,
    fontWeight:"bold"
  },
  button: {
    backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get('window').width / 1.02,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    
    color: 'white',
    overflow:"hidden"
  },
  price: {
    position: 'absolute',
    left: Dimensions.get('window').width / 1.7,
    fontSize: 17,
    // paddingLeft: '80%',
    color: 'red',
  borderWidth:1,
  borderColor:"green",
  borderRadius:50,
width:"35%",
textAlign:"center",
margin:5
  },
  ImageTobeSold: {
    height: Dimensions.get('window').height / 1.8,
    width: Dimensions.get('window').width,
  },

  separate: {
    padding: 7,
  },
})
export default FilterScreen