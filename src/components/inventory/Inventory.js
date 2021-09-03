import React, { useState } from "react"
import { InventorySearch } from "./InventorySearch"
import { InventoryList } from "./InventoryList"

export const Inventory = () => {
 const [searchTerm, setSearchTerm] = useState("")


return (
    <>
        <InventorySearch getSearchTerm={setSearchTerm} />
        <InventoryList stateToFilter={searchTerm} />
    </>
)

}