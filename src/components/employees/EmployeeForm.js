import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        storeId: 0, 
        manager: false,
        fullTime: false,
        hourlyRate: 0
    });
    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            storeId: parseInt(employee.storeId),
            manager: employee.isManager,
            fullTime: employee.isFullTime,
            hourlyRate: employee.hourlyRate
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/employees")
            })
    }


    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Employee Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="enter name here"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Location:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.storeId = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        max="6"
                        min="1"
                        step="1"
                        className="form-control"
                        placeholder="address of store"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.manager = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Full Time:</label>
                    <input type="checkbox"
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.fullTime = event.target.checked
                                updateEmployee(copy)
                            }
                        }
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Hourly Rate:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.hourlyRate = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="number"
                        min="12.00"
                        max="35"
                        step=".50"
                        className="form-control"
                        placeholder="Hourly Wage"
                         />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit Employee
            </button>
        </form>
    )
}
