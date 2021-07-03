
import React from "react";
import {
View,
Text,
StatusBar,
StyleSheet,
TouchableOpacity
}from "react-native"

class FilterNavigation extends React.Component{
    static navigationOptions={
        headerShown:false
    }
    render(){
        return(
            <View style={styles.container}>
 <View style={styles.navigationstyle}>
<TouchableOpacity onPress={this.props.onCosmeticShown}><Text style={styles.filterditem}>Cosmetics</Text></TouchableOpacity>
<TouchableOpacity onPress={this.props.onClothesShown}><Text style= {styles.filterditem}>clothes</Text></TouchableOpacity>
<TouchableOpacity onPress={this.props.onCamerasShown}><Text style={styles.filterditem}>Cameras</Text></TouchableOpacity>
 </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        paddingTop:StatusBar.currentHeight,
        // flex:1,
        // backgroundColor:"#fff",
        height:70
    },
    navigationstyle:{
        flexDirection:"row",
        justifyContent:"space-around"
    },
    filterditem:{
        padding:4,
        fontSize:22,
        fontWeight:"bold",
      borderRadius:50,
      borderColor:"gray",
      borderWidth:0.1,
 backgroundColor:"#fff",
 color:"gray"
    }
})
export default FilterNavigation