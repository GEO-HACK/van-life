import React from 'react';
import { useRouteError } from 'react-router-dom';


export default function Errorroute(){
  const error = useRouteError()
  console.log(error)
  return(
     

        <h1>this is the error page</h1>
        
    )
}