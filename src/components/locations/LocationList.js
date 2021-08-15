import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setlocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((data) => {
                    setlocations(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [locations]
    )

    return (
        <>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
                    }
                )
            }
        </>
    )
}
