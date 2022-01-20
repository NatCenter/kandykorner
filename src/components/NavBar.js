import React from "react"
import { Link } from "react-router-dom"

export const NavBar=()=>{
    return (
        <ul className="navbar">
        <li className="navbar_item active">
            <Link className="navbar_link" to="/locations">Locations </Link>
        </li>
        
        <li className="navbar_item active">
            <Link className="navbar_link" to="/employee">Employee  List </Link>
        </li>
        <li className="navbar_item active">
            <Link className="navbar_link" to="/customers">Customers </Link>
        </li>
        <li className="navbar_item active">
            <Link className="navbar_link" to="/myOrders">My Orders </Link>
        </li>
        <li className="navbar_item active">
            <Link className="navbar_link" to="#" onClick={()=>{
                localStorage.removeItem("kandy_customer")
            }}>Logout </Link>
        </li>
        </ul>
    )

}