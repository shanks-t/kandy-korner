import React from "react"


export const InventorySearch = ({getSearchTerm}) => (

<div className="inventory_search">
        <input type="text" 
            placeholder="Search Inventory" 
            onChange={e => {getSearchTerm(e.target.value); console.log("e.target.value: ", e.target.value)}
            }/>
</div>
)