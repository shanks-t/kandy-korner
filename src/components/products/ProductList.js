import React, { useEffect, useState} from "react"
import { useHistory } from "react-router-dom"

export const ProductList = () => {

    const [products, setProducts] = useState([])
    const history = useHistory()

    const submitPurchase = (id) => {
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            productId: id,
            timeStamp: Date.now()
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)

        }

        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/purchases")
            })
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=price&_order=desc")
                .then(res => res.json())
                .then((data) => {
                    setProducts(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [products]
    )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>
                        {product.productType.type} {product.productName} {product.price} <button 
                        onClick={()=> submitPurchase(product.id)}      
        
                        >Purchase Candy</button>
                        </p>
                    }
                )
            }
        </>
    )
}
