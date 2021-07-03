// const fetch =async(request)=>{
// const formData=new FormData()
// formData.append("request",{
//     name:request.filename,

//     type:request.type,
//     uri:request.uri
// })

// const response=await fetch('http://localhost:3000/api/listings',{
//     method:"POST",
//     body:formData
// })
// const result=await response.text()
// console.log(result)
// }
// export default fetch


const fetch =async(request)=>{
const formData=new FormData()
formData.append("request",{
    name:request.filename,

    type:request.type,
    uri:request.uri
})

const response=await fetch('http://localhost:3000/api/listings',{
    method:"POST",
    body:formData
})
const result=await response.text()
console.log(result)
}
export default fetch