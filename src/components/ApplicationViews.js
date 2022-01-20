import React from "react"

import { Route } from "react-router-dom"
import {Location} from "./locations"
import { ProductList } from "./productlist"
import {EmployeeList} from "./employee/EmployeeList"
import { NewEmployee } from "./employee/NewEmployee"
import {CustomersList} from "./Customers/CustomerList"
import { MyOrders } from "./MyOrders"
export const ApplicationViews=()=>{
return (

    <>
    
        <Route exact path="/locations">
            <Location/>
        </Route>
        <Route exact path="/locations/:locationId(\d+)">
            <ProductList/>
        </Route>
    
        <Route exact path="/myOrders">
            <MyOrders/>
        </Route>
    
       
        <Route exact path="/employee">
        <EmployeeList/>
        </Route>
        <Route exact path="/NewEmployee">
        <NewEmployee/>
        </Route>
        <Route exact path="/customers">
        <CustomersList/>
        </Route>
    </>
)

}

