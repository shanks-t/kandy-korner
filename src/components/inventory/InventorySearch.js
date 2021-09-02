import React from "react"





export const InventorySearch = (func) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Inventory...</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Inventory"
            onChange = {(e) => {
                func(e.target.value)}} 
        />
        <button type="submit">Search</button>
    </form>
)