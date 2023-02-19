import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import placeholder from "../../img/rigo-baby.jpg";

const DescriptionVeh = () => {
   const {number} = useParams();
   const [desc, setDesc] = useState ([]);

   useEffect (() =>{
     axios.get(`https://swapi.dev/api/vehicles/${number}`)
     .then(response =>{
        setDesc(response.data);
        console.log(response.data);
     })
     .catch(error => {
        console.log(error);
     })

   }, [] );


    return(
        <>
        
        <div className="container m-5 d-flex justify-content-center">
           <div className="row">
            <div className="col">
                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${number}.jpg`} onError={(e) => e.target.src=placeholder} />
            </div>
            <div className="col">
                <h1>{desc.name}</h1>
                <p>
                   <strong>Model:</strong> {desc.model} <br />
                   <strong>Manufacturer:</strong> {desc.manufacturer} <br />
                   <strong>Cost in credits:</strong> {desc.cost_in_credits} <br />
                   <strong>Length:</strong> {desc.length} <br />
                   <strong>Max atmosphering speed:</strong> {desc.max_atmosphering_speed} <br />
                   <strong>Passengers:</strong> {desc.passengers} <br />
                   <strong>Consumables:</strong> {desc.consumables} 
                </p>
            </div>
           </div>
        </div>
        
        </>
    )
};


export default DescriptionVeh;