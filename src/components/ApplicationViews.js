import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/ProductList"
import { LocationList } from "./locations/LocationList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}
