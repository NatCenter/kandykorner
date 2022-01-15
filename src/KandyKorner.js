import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ApplicationViews } from "./components/ApplicationViews"


export const KandyKorner = () => {
    return (
        <>
        <NavBar />
        <ApplicationViews/>
        
       </>
    )
}
