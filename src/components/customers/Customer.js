import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../ApiManager"


export const Customer = () => {
    //const [purchases, setPurchases] = useState([])
    const [purchasesForCustomer, setpurchasesForCustomer] = useState([])
    const { customerId } = useParams()

    useEffect(
        () => {
           getFetch(`http://localhost:8088/purchases?customerId=${customerId}&_expand=product&_expand=customer`)
            .then((data) => {
                setpurchasesForCustomer(data)
                console.log(data)
            })
            // .then(getFetch("http://localhost:8088/purchases")
            // .then(
            //     (purchases) => {
            //         setPurchases(purchases)
            //     }    
            // ))
        },
        [ customerId ]
    )

    useEffect(
        () => {

        },
        [purchasesForCustomer],
        console.log("array: ", purchasesForCustomer)
    )

    // useEffect(
    //     () => {
    //         purchases.map(
    //             (purchase) => {
    //                 return filterCustomerPurchases(purchasesForCustomer)
    //             }
    //         )
    //     },
    //     [purchases]
    // )

    // const filterCustomerPurchases = () => {
    //     const customerPurchases = purchases.filter(
    //     (purchase) =>  purchase.customerId.includes(customerId)
    //     )
    //     setpurchasesForCustomer(customerPurchases)
    // }



    return (
        <>
            <h2>Customer {customerId} Details</h2>
            <section className="customer">
                <h3 className="customer__name">{purchasesForCustomer.customer?.name}</h3>
                <table>
            <tr>
                <th>Candy</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
            {
                purchasesForCustomer
                .reduce((prev, curr) => {
                    let count = curr[prev]
                    if(curr.id in prev) {
                        prev++
                    } else {
                        prev[curr.id] = 1
                    }  return count
                },{}
                )
                 .map(
                    (purchase) => <tr>
                        <td>{purchase.product?.productName}</td>
                        <td>{purchase.product?.prev}</td>
                        <td>{purchase.product?.price}</td>
                    </tr>
                )
            }
                </table>
            </section>
        </>
    )
}