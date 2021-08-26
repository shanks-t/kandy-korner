import React, { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmpoyees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((data) => {
                    setEmpoyees(data)
                })
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
            {
                employees.map(
                    (employee) => {
                        return <p key={`employee--${employee.id}`}>
                        {employee.name} {employee.storeId} 
                        </p>
                    }
                )
            }
        </>
    )
}
