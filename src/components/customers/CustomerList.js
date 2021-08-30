import React, { useEffect, useState } from "react"
import { getFetch } from "../ApiManager"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getFetch("http://localhost:8088/customers")
                .then(
                    (customers) => {
                        setCustomers(customers)
                    }    
                )
        },
        []
    )

    useEffect(
        () => {

        },
        [customers]
    )

    return (
        <>
            {
                customers.map(
                    (customer) => {
                        return <p key={`customer--${customer.id}`}>
                        {customer.name} 
                        </p>
                    }
                )
            }
        </>
    )
}
