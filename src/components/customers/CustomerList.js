import React, { useEffect, useState } from "react"
import { getFetch } from "../ApiManager"


export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])

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
            getFetch("http://localhost:8088/purchases")
                .then(
                    (purchases) => {
                        setPurchases(purchases)
                    }    
                )
        },
        []
    )
    const countPurchases =  (id) => {
        let count = 0
            for (const purchase of purchases) {
                if (id === purchase.customerId) {
                    count++
                }
            }
        return count
    }
    useEffect(
        () => {

        },
        [purchases]
    )
    useEffect(
        () => {

        },
        [customers]
    )

    return (
        <>
        <table>
            <tr>
                <th>Customer</th>
                <th>Candies Bought</th>
            </tr>
            {
                customers.map(
                    (customer) => {
                        return <tr>
                                <td>{customer.name}</td>
                                <td>{countPurchases(customer.id)}</td>
                            </tr>
                        
                    }
                )
            }
        </table>
        </>
    )
}
