// const counters=[{id:1,name:"name",required:"jhsdj"},{id:2,name:"name",required:"jhsdj"},{id:3,name:"name",required:"jhsdj"}]
// const results=[{id:1,name:"name",required:"jhsdj"},{id:2,name:"name",required:"jhsdj"},{id:3,name:"name",required:"jhsdj"}]




// // const ans=counters.filter(counter=>{

// // })
// // for (let counter of counters)
// //  let count=counter.id

// // for (let result of results)
// //  let resul=result.id
// // console.log(
// // counters.forEach(()=> results.filter(result=>result.id !== counters.id)  
// // )
// // )
// // const found=counters.filter( counter=>{
// //     for (let r of results)
// //      ans= r
// // return ans
// // })
// for (let r of results)
//      ans= r
// const found=counters.forEach(counter=>counter.id !==ans.id)

// console.log(found)




let arrA=[{id:1,name:"name",required:"jhsdj"},{id:2,name:"name",required:"jhsdj"},{id:3,name:"name",required:"jhsdj"}]
let  arrB=[{id:1,name:"name",required:"jhsdj"},{id:2,name:"name",required:"jhsdj"},{id:5,name:"name",required:"jhsdj"},{id:7,name:"name",required:"jhsdj"}, {id:8,name:"name",required:"jhsdj"}]

const newitem=arrB.filter(b=>!arrA.some(a=>a.id ===b.id))
console.log(...newitem)




// Array.prototype.diff=(arr2)=>{
// let ret=[]
// for (let i in this ){
// if(arr2.indexOf(this[i]) > -1){
//     ret.push(this[i])
// }
// }
// return ret
// }
// console.log(array1.diff(array2))

// for(let item of array1){
//     // if(item !==array2.forEach(array=>array.id) ){
//     //  return   console.log(item)
//     // }
//     // console.log(item.id)

    
// }

// function ret(){
    
//   array2.forEach(array=>console.log(array.id)) 
// }


// for (let item1 of array1)
//   result1= item1.id


//  for (let item2 of array2)
//   result2= item2.id















  getanotherlisting = async (token) => {
    try{

    const response = await fetch("https://marketdayserver.herokuapp.com/api/listings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        token
      })
    })
   const result = await response.json()
if(result.error){
    return result
}else{
    if(this.state.counters.length >1){
  this.setState ({counters:[]})
    }else{
        this.setState({counters:result})
    }
}



    }catch(err){
        alert('network error ')
    }

  }
   



  
//   getanotherlisting = async (token) => {
//     try{

//     const response = await fetch("https://marketdayserver.herokuapp.com/api/listings", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify({
//         token
//       })
//     })
//    const result = await response.json()
// if(result.error){
//     return result
// }else{
//     if(this.state.counters.length >1){

//      const newitem=result.filter(r=>!this.state.counters.some(c=> c.id ===r.id))
// this.setState(prevstate=>({counters:[...prevstate.counters,...newitem, ]})) 
//   // this.setState ({counters:[]})
//     }else{
//         this.setState({counters:result})
//     }
// }



//     }catch(err){
//         alert('network error ')
//     }

//   }
   