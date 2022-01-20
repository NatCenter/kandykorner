import React, {useState,useEffect} from "react"





export const MyOrders=()=>{
    const [orders, setOrderItems]=useState([])
    const [product,foreignKey]=useState("")

    useEffect(
        ()=>{
            fetch("http://localhost:8088/purchases?_expand=product")
            .then(res => res.json())
            .then((orderArray)=>{
                setOrderItems(orderArray)
            })
        },
        []
    )
    useEffect(()=>{
        const justForeignKey=orders.map(emp=>emp.candyname)
        foreignKey(justForeignKey.join(""))
    },[orders])
    return (
        <>
        <h1>
            My Orders

        </h1>
        {
        orders.map((order)=>{
            return <p>{order.productId} {order.product.candyname} Price:{order.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}</p>

        })
        
        }
        </>

    )


}