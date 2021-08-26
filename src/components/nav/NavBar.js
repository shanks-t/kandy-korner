import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="nabar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="nabar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="nabar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="nabar__link" to="/locations">Stores</Link>
            </li>
        </ul>
    )
}