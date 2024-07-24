import { Collection } from 'miragejs';
import React from 'react'
import { Link,NavLink,Outlet, useParams, } from 'react-router-dom';


export default function HostVanDetail() {

    const activeStyles = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
    }


    const [currentVan, setCurrentVan] = React.useState(null);
    const  params  = useParams(); //has not been destructured

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then(data => setCurrentVan(data.vans));
    }, []);

    if (!currentVan) return <p>loading...</p>;

    return (
        <section>
        
            <Link
            to="../"
            relative='path'
            className='back-button'
            >&larr;<span>Back to all vans</span></Link>

        
        <div className='host-van-detail-layout-container'>
            <div className='host-van-detail'>
                <img src={currentVan.imageUrl}  />
                <div className='host-van-detail-info-text'>
                    <i 
                       className={`van-type  van-type-${currentVan.type}`}

                    >
                        {currentVan.type}

                    </i>
                    <h3>{currentVan.name}</h3>
                    <h4>${currentVan.price}/day</h4>
                </div>
            </div>
            <nav className='host-van-detail-nav'>
                <NavLink
                 to='.'
                 end
                 style={({isActive})=>isActive ? activeStyles : null }
                >Details</NavLink>

                <NavLink
                 to='pricing'
                 
                 style={({isActive})=>isActive ? activeStyles : null }
                >pricing</NavLink>

                <NavLink
                 to='photos'
                 style={({isActive})=>isActive ? activeStyles : null }
                >photos</NavLink>
                
            

            </nav>
            <Outlet context={{ currentVan }} />
        </div>

      
        </section>
    );
    }