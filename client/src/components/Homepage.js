import Navbar from "./Navbar"
import { Link } from "react-router-dom"

export default function Homepage() {
    return <div>
        <Navbar />
        <h2 className="title">Welcome To Woofers</h2>
        <p className="sentence">The World's Best Team For</p>
        <p className="sentence1">Pet Care Services</p>
        <p className="sentence2">Grooming and supply provides grooming services for all dogs </p>
        <p className="sentence3">and cats breeds.We are fully committed to the Health</p>
        <div className="flexbox">
            <p><Link to="/shop" className="sentence4">Shop Now </Link></p>
            <p><Link to="/Veterinarians" className="sentence4">Vets</Link></p>
        </div>  
    </div>
}