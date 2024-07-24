import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function HostVanDetail() {

    const [currentVan, setCurrentVan] = React.useState(null);
    const  params  = useParams(); //has not been destructured

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then((res) => res.json())
        .then(data => setCurrentVan(data.vans));
    }, []);

    console.log(currentVan);
    if (!currentVan) return <p>loading...</p>;

    return (
        <section>
        
            <Link
            to="/host/vans"
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
        </div>
        </section>
    );
    }