import React, { useEffect, useState } from "react"

export const StoresList = () => {
    const [stores, setStores] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/stores")
                .then(res => res.json())
                .then((data) => {
                    setStores(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [stores]
    )

    return (
        <>
            {
                stores.map(
                    (store) => {
                        return <p key={`store--${store.id}`}>{store.address}</p>
                    }
                )
            }
        </>
    )
}
