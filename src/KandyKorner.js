import React from "react"
import { Route,Redirect  } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { ApplicationViews } from "./components/ApplicationViews"
 

export const KandyKorner = () => {
    return (
        <>
        
        <Route
        render={()=>{

            if(localStorage.getItem("kandy_customer")){
                return(
                    <>
                        <NavBar/>
                        <ApplicationViews/>
                    
                    </>

                )

            }else {
                return <Redirect to="/login"/> 
            }
        }}
        
        />
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
        <Register/>
        </Route>
        
       </>
    )
}
