import React, { useState, useEffect } from "react"
import { InventorySearch } from "./InventorySearch"

export const Inventory = () => {
 const [searchTerm, setSearchTerm] = useState()
    

    useEffect(() => {
 
    }, [searchTerm]
)

return (
    <>
        <InventorySearch func={setSearchTerm()} />
        {/* <InventoryList someAttribute={} /> */}
    </>
)

}