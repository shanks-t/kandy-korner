import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setproducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=price&_order=desc")
                .then(res => res.json())
                .then((data) => {
                    setproducts(data)
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
                        {product.productType.type} {product.productName} {product.price}
                        </p>
                    }
                )
            }
        </>
    )
}
