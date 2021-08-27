import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmpoyees] = useState([])
    const history = useHistory()

    const deleteEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(getEmployees)
    }

    const getEmployees = () => {
        return     fetch("http://localhost:8088/employees?_expand=store")
        .then(res => res.json())
        .then((data) => {
            setEmpoyees(data)
        })
    }
    useEffect(
        () => {
            getEmployees()
        },
        []
    )

    useEffect(
        () => {

        },
        [employees]
    )

    return (
        <>
            <button onClick={() => history.push("/employees/create")}>Add Employee</button>
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                        {employee.name} {employee.store.address} <button onClick={() => {deleteEmployee(employee.id)}}>Fire Employee</button>
                        </p>
                    }
                )
            }
        </>
    )
}
