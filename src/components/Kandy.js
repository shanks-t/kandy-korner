import React from "react"
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList"

export const Kandy = () => {
    return (
        <>

            <h1>Kandy Korner</h1>
            <LocationList />

            <ProductList />
            
        </>
    )
}
