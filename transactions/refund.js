import React from "react"
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions
}from "react-native"

class Refund extends React.Component{
dynamicRefundProccessor=()=>{
  if(this.props.screenProps.user.user.purchase.length>=1){
    return(

  <View style={styles.mainview}>
     
<Text style={{   textAlign:"center",fontSize:20,fontWeight:"bold",color: 'green'}}>Proccess Refunds</Text>
<TextInput style={styles.textinput} keyboardType="numeric" value={`${this.props.screenProps.user.user.purchase}`}/>
<TextInput placeholder="bank" style={styles.textinput}/>
<TextInput placeholder="Account Number" style={styles.textinput} />

<TouchableOpacity onPress={()=>this.props.navigation.navigate("RequestProccessed")}>
<Text style={styles.button}>Refund</Text>
</TouchableOpacity>
  </View>
    )
  }else{
return(
  <View style={styles.mainview}>
     
<Text style={{   textAlign:"center",fontSize:20,fontWeight:"bold",color: 'green'}}> you cant request refund </Text>
<Text style={{color:"green"}}>because you havent purchase anything</Text>
<TextInput  style={styles.textinput} keyboardType="numeric"value={`${this.props.screenProps.user.user.purchase.length}`}/>
<TextInput placeholder="bank" style={styles.textinput}/>
<TextInput placeholder="Account Number" style={styles.textinput} />

<TouchableOpacity onPress={()=>this.props.navigation.navigate("BadRequest")} >
<Text style={styles.buttonerr}> Refund not Available</Text>
</TouchableOpacity>
  </View>)
  
  }
}

    render(){
        return(
          
<ScrollView style={styles.container}>
     <Text 
     style={{
         textAlign:"center",
         fontSize:20,fontWeight:"bold",
         color:"green"
    }}>{this.props.screenProps.user.user.purchase.length}</Text>
{/* 
  <View style={styles.mainview}>
     
<Text style={{   textAlign:"center",fontSize:20,fontWeight:"bold",color: 'green'}}>Proccess Refunds</Text>
<TextInput placeholder="amount" style={styles.textinput} keyboardType="numeric" value="$20.00"/>
<TextInput placeholder="bank" style={styles.textinput}/>
<TextInput placeholder="Account Number" style={styles.textinput} />

<TouchableOpacity>
<Text style={styles.button}>Refund</Text>
</TouchableOpacity>
  </View> */}

  {this.dynamicRefundProccessor()}
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
   buttonerr: {
    backgroundColor: 'red',
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
export default Refund








































































