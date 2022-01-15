import React, {useState,useEffect} from "react"

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
//how do you display decimals in react

    return (
        <>
        
        <h1>Product</h1>

        {
            productTypes.map((productObject)=>{
                return <p key={`${productObject.productTypeId}`} >{productObject.candyname} Price: {productObject.price.toLocaleString("en-US",{style:"currency",currency:"USD"})} Category: {productObject.productType.category}  </p>

            })
        }
      

        </>                                  
         
    )
   


}