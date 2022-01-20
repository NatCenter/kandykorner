import React,{useState,useEffect}  from "react"





export const CustomersList=()=>{
    const [customers, setCustomerList]=useState([])
useEffect(
    ()=>{
        fetch("http://localhost:8088/customers")
        .then(res=>res.json())
        .then((customerArray)=>{
            setCustomerList(customerArray)
        })
    },
    []
)
    return(
        <>
        <h1>Customers List</h1>
            {
                customers.map((customer)=>{
                        return <p id={`customerId--${customer.id}`}>{customer.name}</p>

                })

            }
        </>
    )
    
}