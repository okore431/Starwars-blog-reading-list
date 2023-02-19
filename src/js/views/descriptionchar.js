import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import placeholder from "../../img/rigo-baby.jpg";

const DescriptionChar = () => {
   const {number} = useParams();
   const [desc, setDesc] = useState ([]);

   useEffect (() =>{
     axios.get(`https://swapi.dev/api/people/${number}`)
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
                <img src={`https://starwars-visualguide.com/assets/img/characters/${number}.jpg`} onError={(e) => e.target.src=placeholder} />
            </div>
            <div className="col">
                <h1>{desc.name}</h1>
                <p>
                   <strong>Gender:</strong> {desc.gender} <br />
                   <strong>Hair Color:</strong> {desc.hair_color} <br />
                   <strong>Eye-Color:</strong> {desc.eye_color} <br />
                   <strong>Mass:</strong> {desc.mass} <br />
                   <strong>Skin Color:</strong> {desc.skin_color} <br />
                   <strong>Birth Year:</strong> {desc.birth_year} <br />
                   <strong>Height:</strong> {desc.height} 
                </p>
            </div>
           </div>
        </div>
        
        </>
    )
};


export default DescriptionChar;