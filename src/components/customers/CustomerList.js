import React, { useEffect, useState } from "react"
import { getFetch } from "../ApiManager"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [purchases, setPurchases] = useState([])
    const [customersWithPurchases, setCustomersWithPurchases] = useState([])
    

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

    useEffect(
        () => {
            getFetch("http://localhost:8088/customers")
                .then(
                    (customers) => {
                        setCustomers(customers)
                    }   
                ) 
        },
        [purchases]
    )

    useEffect(
        () => {
            customers.map(
                (customer) => {
                    return addPurchaseProp(customersWithPurchases)
                }
            )
        },
        [customers]
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

    const addPurchaseProp = (obj) => {
        const modifiedCustomers = customers.map(
            (customer) => {
                customer.numOfPurchases = countPurchases(customer.id)
                return customer
            }
        ).sort((a,b) => (b.numOfPurchases) - (a.numOfPurchases))
        setCustomersWithPurchases(modifiedCustomers)
    } 

    return (
        <>

        <table>
            <tr>
                <th>Customer</th>
                <th>Candies Bought</th>
            </tr>
            {
                customersWithPurchases.map(
                    (customer) => {
                        return <tr>
                                <td><Link to={`/customers/${customer.id}`}>{customer.name}</Link></td>
                                <td>{customer.numOfPurchases}</td>
                            </tr>
                        
                    }
                )
            }
        </table>
        </>
    )
}
