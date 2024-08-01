import React from 'react';
import { Link } from 'react-router-dom';


export default function Error(){
  
    return(
        <div className='error-container'>
            <h1>we are sorry the page you are looking for doesnt exist!!!</h1>
    
            <Link 
            to={"/"}
            className='return-btn'
            
            >back to home</Link>

        </div>
        
        
    )
}