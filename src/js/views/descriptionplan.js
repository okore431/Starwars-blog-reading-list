import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import placeholder from "../../img/rigo-baby.jpg";

const DescriptionPlan = () => {
   const {number} = useParams();
   const [desc, setDesc] = useState ([]);

   useEffect (() =>{
     axios.get(`https://swapi.dev/api/planets/${number}`)
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
                <img src={`https://starwars-visualguide.com/assets/img/planets/${number}.jpg`} onError={(e) => e.target.src=placeholder} />
            </div>
            <div className="col">
                <h1>{desc.name}</h1>
                <p>
                   <strong>Rotation period:</strong> {desc.rotation_period} <br />
                   <strong>Orbital period:</strong> {desc.orbital_period} <br />
                   <strong>Diameter:</strong> {desc.diameter} <br />
                   <strong>Climate:</strong> {desc.climate} <br />
                   <strong>Gravity:</strong> {desc.gravity} <br />
                   <strong>Terrain:</strong> {desc.terrain} <br />
                   <strong>Population:</strong> {desc.population} 
                </p>
            </div>
           </div>
        </div>
        
        </>
    )
};


export default DescriptionPlan;