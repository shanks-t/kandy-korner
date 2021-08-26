import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kandy.css"

export const KandyKorner = () => {
    return (
        <>
                <NavBar />
                <h1>Kandy's Candy Corner</h1>
                <ApplicationViews />
    </>
    )
}
