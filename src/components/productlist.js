import React, {useState,useEffect} from "react"
import { useHistory } from "react-router-dom"
export const ProductList = () => {
    // the useState returns a array
const [productTypes, setProductType]=useState([])
const [product,foreignKey]=useState("")


//takes two argements a function and an array this is working like an event lestener
useEffect(
    ()=>{
        fetch("http://localhost:8088/products?_expand=productType")
        .then(res => res.json())
        .then((productArray)=>{
            setProductType(productArray)
        })
    },
    []
)
useEffect(()=>{
    const justForeignKey=productTypes.map(emp=>emp.price)
    foreignKey(justForeignKey.join(""))
},[productTypes])

const history=useHistory()
const sendOrder=(productId)=>{
    const newOrder={
        productId:productId,
        customerId:1,
        locationId:1
        
        
    }
    
    const post={
        method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify(newOrder)
       }
       return fetch("http://localhost:8088/purchases",post)
       .then(response=>response.json())
       .then(()=>{
            history.push("/MyOrders")

       })
    }


    return (
        <>
        
        <h1>Product</h1>

        {
            productTypes.map((productObject)=>{
                return <p key={`${productObject.productTypeId}`} >{productObject.candyname} Price: {productObject.price.toLocaleString("en-US",{style:"currency",currency:"USD"})} Category: {productObject.productType.category} 
                 <button  key={`${productObject.id}`}onClick={()=>{
                     sendOrder(productObject.id)
                 }
                }> Purchase</button> </p> 

            })
        }
      

        </>                                  
         
    )
   

}
