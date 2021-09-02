import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../ApiManager"


export const Purchase = () => {
    const [ purchase, assignPurchase ] = useState({})
    const { purchaseId } = useParams()

    useEffect(
        () => {
           getFetch(`http://localhost:8088/purchases/${purchaseId}?_expand=product&_expand=customer`)
            .then((data) => {
                assignPurchase(data)
            })
        },
        [ purchaseId ]
    )

    return (
        <>
            <h2>Order {purchaseId} Details</h2>
            <section className="purchase">
                <h3 className="purchase__productName">{ purchase.product?.productName }</h3>
                <div className="purchase__price">${ purchase.product?.price }</div>
                <div className="purchase__customer">{ purchase.customer?.name }</div>
            </section>
        </>
    )
}

