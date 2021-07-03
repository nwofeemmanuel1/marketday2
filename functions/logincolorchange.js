  import {Dimensions} from "react-native"
import { color } from "react-native-reanimated"
  const handlecolorchange=(state)=>{
    if(state.disabled){
      return {
      backgroundColor: 'gray',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.3,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:20,
    color: 'white',
    overflow:"hidden"
    }
  }else{
    return {
      backgroundColor: 'green',
    alignSelf: 'center',
    width: Dimensions.get("window").width/1.3,
    // marginLeft: Dimensions.get('window').width /8,
    height: 35,
    borderRadius: Platform.OS==="ios" ? 17 :50,
 
    paddingTop: 6,
    fontSize: 18,
    textAlign: 'center',
    margin:20,
    color: 'white',
    overflow:"hidden"
    } 
  }

}
export default handlecolorchange
