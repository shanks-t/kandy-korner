import React, { useRef, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { postFetch, getFetch } from "../ApiManager"
import "./Login.css"

export const Register = (props) => {
    const [customer, setCustomer] = useState({})
    const conflictDialog = useRef()

    const history = useHistory()

    useEffect(
        () => {
            getFetch("http://localhost:8088/customers")
                .then
                    (user => !!user.length)   
        },
        []
    )
    // const existingUserCheck = () => {
    //     return fetch(`http://localhost:8088/customers?email=${customer.email}`)
    //         .then(res => res.json())
    //         .then(user => !!user.length)
    // }
    const handleRegister = (e) => {
        e.preventDefault()
        getFetch(`http://localhost:8088/customers?email=${customer.email}`)
            .then((userExists) => {
                if (!userExists) {
                    postFetch("http://localhost:8088/customers", customer)
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("kandy_customer", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateCustomer = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }


    return (
        <main style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Kandy's Candy Korner</h1>
                <fieldset>
                    <label htmlFor="name"> Full Name </label>
                    <input onChange={updateCustomer}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="address"> Address </label>
                    <input onChange={updateCustomer} type="text" id="address" className="form-control" placeholder="Street address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateCustomer} type="email" id="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

