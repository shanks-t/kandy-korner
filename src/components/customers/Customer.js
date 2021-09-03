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
        },
        [ customerId ]
    )

    useEffect(
        () => {
            setReducedArr(combineProducts(purchasesForCustomer))
        },
        [purchasesForCustomer]
    )

    const combineProducts = (arr) => {
        const uniqueProducts = []
        arr.forEach((product) => {
            
          const hasProduct = !!uniqueProducts.find((uniqueProduct) => (
            uniqueProduct.productId === product.productId
          ));
      
          if (!hasProduct) {
            uniqueProducts.push(product)

          }
        })
        return uniqueProducts;
      }
  
    const countInstances = (id) => {
        let count = 0
        for (const purchase of purchasesForCustomer) {
            if (purchase.productId === id){
                count++
            }
        }
          return count;
        }


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
                 .map(
                      (purchase) =>
                         <tr>
                            <td>{purchase.product.productName}</td>
                            <td>{countInstances(purchase.productId)}</td>
                            <td>{purchase.product.price * countInstances(purchase.productId)}</td>
                        </tr>
                     )
            }
                </table>
            </section>
        </>
    )
}