import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/ProductList"
import { StoresList } from "./stores/StoresList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { CustomerList } from "./customers/CustomerList"
import { PurchaseList } from "./purchases/PurchaseList"
import { Purchase } from "./purchases/Purchase"
export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/products">
                <ProductList />
            </Route>

            <Route exact path="/purchases">
                <PurchaseList />
            </Route>
          
            <Route exact path="/purchases/:purchaseId(\d+)">
                <Purchase />
            </Route>

            <Route exact path="/stores">
                <StoresList />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
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
