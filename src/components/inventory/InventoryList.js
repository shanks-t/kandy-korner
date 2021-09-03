import  { useEffect, useState } from "react"


export const InventoryList = ({stateToFilter}) => {
const [inventory, setInventory] = useState([])
const [filteredArr, setFilteredArr] = useState([])


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
    useEffect(
        () => {
            filterArray(inventory)
            console.log("stateToFilter: ", stateToFilter)
        },
        [stateToFilter]
    )
    useEffect(
        () => {
        
            console.log("filteredArray: ", filteredArr)
        },
        [filteredArr]
    )
   const filterArray = (arr) => {
      const filteredArr =  arr.filter((val) => {
          
            if (stateToFilter === "") {
                return val
            } else if (val.productName.toLowerCase().includes(stateToFilter.toLowerCase())) {
                return val
            }
            }
        )
        setFilteredArr(filteredArr)
    }
     
     

    return (
        <>
        {  filteredArr.map(
                (item) => {
                    return <div className="iventory_item"> 
                        <p>
                        {item.productName}
                        </p> 
                    </div>
                }
            )
        }
        </>
    )
}