import React from "react";
import { Link } from "react-router-dom";


export default function Vans({children}) {
    const [vans, setVans] = React.useState([])
    
    React.useEffect(() => {
        fetch('/api/vans')
             .then(res => res.json()
             .then (data => setVans(data.vans)))
    }, [])

    const vanElements = vans.map(van=> (
        <div key={van.id} className='van-tile'>
            <Link to={`/vans/${van.id}`} aria-label={`view details for ${van.name}, priced at $${van.price} per day`}>
            <img src={van.imageUrl} alt={`image of van named ${van.imageUrl}`} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
                </div>
            </Link>
         
            <i className = {`van-type ${van.type}  selected`}>{van.type}</i>
        </div>
    ))
    
    return (
        <div className="van-list-container">
            <h1>Explore our vans</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}