import React from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const  params  = useParams();
    const [van , setVan] = React.useState(null);
  
    //making a fetch request for the specific id
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);
    console.log(van);
    return (
       <div className="van-detail-container">
        { van ? (
            <div className = "van-detail">
                <img src={van.imageUrl} alt={`image of ${van.name}`} />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
            </div>
        ) :
        
            <p>loading...</p>
        
    }
       </div>
    );
    }