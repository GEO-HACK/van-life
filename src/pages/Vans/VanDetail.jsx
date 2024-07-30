import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function VanDetail() {
    const  params  = useParams();
    const [van , setVan] = React.useState(null);

    const location = useLocation()
    console.log(location)
  
    //making a fetch request for the specific id
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVan(data.vans));
    }, [params.id]);


    const search = location.state?.search || ""   // this is some optional chaining which eliminates the && 
    const type= location.state?.type || "all"
    
    return (
       <div className="van-detail-container">
        <Link
            to={`..${search}`}
            relative="path"
            className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
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