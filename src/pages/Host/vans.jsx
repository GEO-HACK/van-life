import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans() {
    const [vans, setVans] = React.useState([]);

    React.useEffect(() => {
        fetch('/api/vans')
        .then((response) => response.json())
        .then((data) => setVans(data.vans));
    }, []);

    const hostVansEls = vans.map((van) => (
        <Link 
        to={`/host/vans/${van.id}`}
        key={van.id}
        className = "host-van-link-wrapper"
        >
            <div className='host-van-single' key={van.id}>
                <img src={van.imageUrl} alt={`photo of ${van.name}`} />
                <div className='host-van-info'>
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </div>
            
        </Link>
    ));
    
    return(
            <section>
                <h1 className='host-vans-title'>Your listed vans</h1>
                <div className='host-vans-list'>
                    {vans.length > 0 ?
                    (
                        <section>
                            {hostVansEls}
                        </section>
                    )
                :(
                    <p>loading...</p>
                )}
                </div>
            </section>
        )
       
    ;
    }