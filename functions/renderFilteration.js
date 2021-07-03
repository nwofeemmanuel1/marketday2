import React from "react"
import {View } from "react-native"
import FilterScreen from "../profilescreen/filterScreen"

 export const dynamicViewInsertion=(counter)=>{
     if(counter.onCosmeticsShown)return(
 counter.counters.filter(c=>c.category === "Cosmetics")
.map(c=> {
    return(
<View key={ c._id}>
  <FilterScreen
           key={ c._id} 
          counters={ c}
           onhandlebtnchange={counter.onButtonChange} 
            onhandleAdd={counter.onAdd} 
            onNavigate={counter.handlenavigator}   
            /> 
       
        </View>
    )
}

)
    )     

 if(  counter.onClothesShown)return(
 counter.counters.filter(c=>c.category === "Clothes")
.map(c=> {
    return(
<View key={ c._id}>
          <FilterScreen
           key={ c._id} 
          counters={ c}
           onhandlebtnchange={counter.onButtonChange} 
            onhandleAdd={counter.onAdd} 
            onNavigate={counter.handlenavigator}
            onFilter={counter.dynamicViewInsertion}
            /> 
       
        </View>
    )
}

)
    )     

        if(  counter.onCamerasSHown)return(
 counter.counters.filter(c=>c.category === "Cameras")
.map(c=> {
    return(
<View   key={ c._id}  >
          <FilterScreen
           key={ c._id} 
          counters={ c}
           onhandlebtnchange={counter.onButtonChange} 
            onhandleAdd={counter.onAdd} 
            onNavigate={counter.handlenavigator}
            onFilter={counter.dynamicViewInsertion}
            /> 
       
        </View>
    )
 
}

)
    )   

  }