
import React from "react"
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image
}from "react-native"

class BadRequest extends React.Component{

componentDidMount(){
  setTimeout(()=>this.props.navigation.navigate("screen"),1500)
}


    render(){
        return(
          
<ScrollView style={styles.container}>
     <Text 
     style={{
         textAlign:"center",
         fontSize:20,fontWeight:"bold",
         color:"red"
    }}>Refund cant be proccessed</Text>

  <View style={styles.mainview}>
     
<Text style={{   textAlign:"center",fontSize:20,fontWeight:"bold",color: 'red'}}>Refund Not Proccessed</Text>

<Image source={require("../assets/badrequest.png")} style={{width:"90%", height:200}}/>
<Text style={{textAlign:"center",color:"green",fontWeight:"bold"}}>Request cant be proccessed because you have no pending orders</Text>
  </View>


</ScrollView>
         
        )
    
    
    }
}

const styles=StyleSheet.create( {
container:{
    flex:1,
backgroundColor:"#E5E5E5",

},
mainview:{
 alignItems:"center",  
marginTop:20,
backgroundColor:"#fff",
height:390,
width:"85%",
alignSelf:"center",
borderColor:"#e1e8ed",
borderWidth:1,
justifyContent:"center"
},
textinput:{
  margin:5,
    textAlign: 'center',
    // color: 'white',
    width:"85%" ,
    borderRadius: 50,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf:"center"
},
  button: {
    backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.6,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:7,
    color: 'white',
    overflow:"hidden"
  },
    })
export default BadRequest