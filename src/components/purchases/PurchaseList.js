import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getPurchases } from "../ApiManager"


export const PurchaseList = () => {
    const [purchases, setPurchases] = useState([])
    

    useEffect(
        () => {
           getPurchases()
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

        },
        [purchases]
    )

    return (
        <>
            {
                purchases.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>
                        {purchase.productId} <Link to={`/purchases=/${purchase.id}`}>{purchase.product.productName}</Link> {purchase.product.price}
                        </p>
                    }
                )
            }
        </>
    )
}
