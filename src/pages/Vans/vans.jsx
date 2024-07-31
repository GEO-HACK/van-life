import React from "react";
import { getVans } from "../../api"
import { Link,useSearchParams ,useLoaderData } from "react-router-dom";




export async function loader(){
    console.log("loader has been called")
    const vans = await getVans()
    console.log("this are the vans",vans)
    return vans
    
}

export default function Vans({children}) {
    const vans = useLoaderData()
    console.log(vans)
   
   
    // const [vans, setVans] = React.useState([])
     const[loading, setLoading]= React.useState(false)
    const[error, setError]= React.useState(null)
  
  
    
    
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type');
    
    // React.useEffect(() => {
    //     async function loadVans(){
    //         setLoading(true)
    //         try{
    //             const data = await getVans()
    //             setVans(data)
    //         }
    //         catch(err){
    //             setError(err)
    //         }
    //         finally{
    //             setLoading(false)
    //         }      
    //     }
    //     loadVans()
    // }, [])

    const filteredVans = typeFilter ? vans.filter((van) => van.type ===typeFilter ): vans;


    const vanElements = filteredVans.map(van=> (
        <div key={van.id} className='van-tile'>
            <Link
             to={van.id} 
             state={{
                search:`?${ searchParams.toString() }`,
                type: typeFilter
                }}
             aria-label={`view details for ${van.name}, priced at $${van.price} per day`}
             >
            <img src={van.imageUrl} alt={`image of van named ${van.imageUrl}`} />
            <div className="van-info">
                <h2>{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
                </div>
            </Link>
         
            <i className = {`van-type ${van.type}  selected`}>{van.type}</i>
        </div>
    ))

    function handleFilterChange(key, value){
        setSearchParams(prevparams => {
            if (value===null){
                prevparams.delete(key)
            }else{
                prevparams.set(key,value)
            }
            return prevparams
        })
    }
    if (loading){
        return <h1>loading...</h1>
    }
    if (error){
        return <h1>There was an error: {error}</h1>
    }
    
    return (
        <div className="van-list-container">
            <h1>Explore our vans</h1>
            <div className="van-list-filter-buttons">
                { typeFilter ?(<button 
                onClick={() => handleFilterChange('type', null)}
                className="van-type clear-filters"
                 >all</button> ) : null}

                <button 
                onClick={() => handleFilterChange('type', 'simple')}
                className={`van-type simple ${typeFilter ==="simple" ? "selected" : ""  }`}
                >simple</button>

                <button 
                onClick={()=> handleFilterChange('type', 'rugged')  }
                className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""  }`}
                >rugged</button>

                <button 
                onClick={() => handleFilterChange('type', 'luxury')}
                className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""  }`}
                >luxury</button>

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}