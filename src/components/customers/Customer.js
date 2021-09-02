import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../ApiManager"


export const Customer = () => {
    const [reducedArr, setReducedArr] = useState([])
    const [purchasesForCustomer, setpurchasesForCustomer] = useState([])
    const { customerId } = useParams()

    useEffect(
        () => {
           getFetch(`http://localhost:8088/purchases?customerId=${customerId}&_expand=product&_expand=customer`)
            .then((data) => {
                setpurchasesForCustomer(data)
                console.log("purchasesForCustomer:", data)
            })
            // .then(getFetch("http://localhost:8088/purchases")
            // .then(
            //     (purchases) => {
            //         setPurchases(purchases)
            //     }    
            // ))
        },
        [ customerId ]
    )

    useEffect(
        () => {
            setReducedArr(countedPurchases(purchasesForCustomer, "productId"))
        },
        [purchasesForCustomer]
    )

    const countedPurchases = (objectArray, property) => {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property]
        if(!acc[key]) {
             acc[key] = [obj]
        } else {
         acc[key].push(obj)
        }  return acc
    }, [])
    
 }
  
    // useEffect(
    //     () => {
    //         purchases.map(
    //             (purchase) => {
    //                 return filterCustomerPurchases(purchasesForCustomer)
    //             }
    //         )
    //     },
    //     [purchases]
    // )

    // const filterCustomerPurchases = () => {
    //     const customerPurchases = purchases.filter(
    //     (purchase) =>  purchase.customerId.includes(customerId)
    //     )
    //     setpurchasesForCustomer(customerPurchases)
    // }



    return (
        <>
            <h2>Customer {customerId} Details</h2>
            <section className="customer">
                <h3 className="customer__name">{purchasesForCustomer.customer?.name}</h3>
                <table>
            <tr>
                <th>Candy</th>
                <th>Quantity</th>
                <th>Price</th>
                {console.log("reduced:", reducedArr)}
            </tr>
            {reducedArr
                 .map(function (nested) {
                     return nested.map(function (purchase) {
                         return <tr>
                        <td>{nested.product?.productName}</td>
                        <td>{nested.length}</td>
                        <td>dunno</td>
                    </tr>
                     })
                 })
            }
                </table>
            </section>
        </>
    )
}