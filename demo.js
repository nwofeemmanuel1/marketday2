import React from "react"
import {Text,StyleSheet,View,TouchableOpacity} from "react-native"
import * as ImagePicker from 'expo-image-picker';
import fetch from  'isomorphic-fetch'
class App extends React.Component{
  state = { selectedImage: '', setSelectedImage: '' };
  fetchuser= async()=>{
const response=await fetch('https://picsum.photos')
try{
const result = await response.text()

console.log(result)
}catch(err){
  console.log(err.message)
}
}
  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      return alert('permission to access images denied');
    } else {
            let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      } else {
          this.setState({ selectedImage: pickerResult})
          console.log(pickerResult)
         this.fetch(pickerResult)
      }
    }
  
  }

render(){
  return(
    <View style={styles.view}>
      <Text style={{fontSize:20 }}>Hello react native</Text>
      <TouchableOpacity onPress={()=>this.openImagePickerAsync()}>
      <Text style={{fontSize:20,padding:10,margin:5,backgroundColor:"green" }}>addimage</Text>
      <Text style={{fontSize:40}} onPress={this.fetchuser}>upload</Text>
      </TouchableOpacity>
    </View>
  )
}
}
const styles=StyleSheet.create({
  view:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }
})
export default App