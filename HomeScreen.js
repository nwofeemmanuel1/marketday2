
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,

  Platform
} from 'react-native';


class Homescreen extends Component {

  screenWidth = Math.round(Dimensions.get('window').width);

  // constructor() {
  //   super();
  // }
  state={

  }

//   showdetails=(id)=>{
// alert(id)
//   }
adder= ()=>{
  this.props.onAdd(this.props.counters)
  this.props.onButtonChange(this.props.counters)
}



functioncaller=()=>{
 this.adder()
 
}

  handlebutton=()=>{
return(
  <Text>{this.props.TotalItemAdded}</Text>
)
  }
 

  render() {
    return (
      <ScrollView style={styles.main}>
      
      <View
  style={{
    borderBottomColor: 'green',
    borderBottomWidth: 1,
    
  }}
/>
     
      
          <View style={styles.product}>
            <Text style={styles.itemname}> {this.props.name}</Text>
            <Text style={styles.price}>${this.props.price}</Text>
          </View>

          <TouchableOpacity onPress={()=>this.props.onNavigate(
            this.props.id,
          this.props.source,this.props.name,this.props.price,
            this.props.counters.user.userIcon,
            this.props.counters.user.username)}>
            <Image
              style={styles.ImageTobeSold}
              source={{
                uri: this.props.source,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={this.functioncaller} >
            <Text style={styles.button}>{ this.props.onButtonChange(this.props.counters)} </Text>
          </TouchableOpacity>
  {this.alerta}
        <View style={styles.separate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    // alignItems: 'center',
    flex: 1,

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
    left: Dimensions.get('window').width / 1.4,
    fontSize: 17,
    // paddingLeft: '80%',
    color: 'green',
  borderWidth:1,
  borderColor:"green",
  borderRadius:50,
width:"25%",
textAlign:"center",
margin:5,
fontWeight:"bold"
  },
  ImageTobeSold: {
    height: Dimensions.get('window').height / 1.8,
    width: Dimensions.get('window').width,
  },

  separate: {
    padding: 7,
  },
});

export default Homescreen;

