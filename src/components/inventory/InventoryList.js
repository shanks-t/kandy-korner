import  { useEffect, useState } from "react"


export const InventoryList = () => {
const [inventory, setInventory] = useState([{}])
const [searchTerm, setSearchTerm] = useState("")


    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then((data) => {
                    setInventory(data)
                })
        },
        []
    )



    return (
        <div className="inventory_search">
            <input type="text" 
            placeholder="Search Inventory" 
            onChange={(e) => setSearchTerm(e.target.value)
            }/>
            {inventory.filter((val) => {
                if (searchTerm === "") {
                    return val
                } else if (val.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
                }
            )
            .map(
                (item) => {
                    return <div className="iventory_item"> 
                        <p>
                        {item.productName}
                        </p> 
                    </div>
                }
            )}
        </div>
    )
}