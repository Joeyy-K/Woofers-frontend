import React from "react"
import { NavLink} from "react-router-dom";

export default function Navbar() {
    return <nav className="nav">
        <ul>
            <li className="active"><NavLink exact="true" to="/home">Home</NavLink></li>
            <li className="active"><NavLink exact="true" to="/shop">Shop</NavLink></li>
            <li className="active"><NavLink exact="true" to="/veterinary">Veterinary</NavLink></li>
            <li className="active"><NavLink exact="true" to="/about">About</NavLink></li>
        </ul>
    </nav>
}