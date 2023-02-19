import React from "react";
import placeholder from "../../img/rigo-baby.jpg"
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { addFavorite, deleteFavorite } from "../store/slice";

const Character = (props) => {
  const dispatch = useDispatch(); // Setting up Dispatch from the Redux Toolkit
  const favorites = useSelector(state => state.favorite.favorites); // Selecting the Favorites from the favoriteSlice.js the 'favorites' after the last dot is actually that array
  const isFavorite = favorites.find(favorite => favorite.title === props.characterName) !== undefined; // Double checking whether the item has beed declared as a Favorite already

  const addToFavorites = (title, url) => { // Passing an item to Favorites
   console.log(title, url);
   dispatch(addFavorite({ title, url }));
  };

  const removeFromFavorites = (title, url) => { // Removing an item from Favorites
   console.log(title, url);
   dispatch(deleteFavorite({ title, url }));
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.characterImage} onError={(e) =>e.target.src=placeholder} />
      <div className="card-body">
        <h5 className="card-title">{props.characterName}</h5>
        <p className="card-text">
        <strong>Gender:</strong> {props.gender} <br />
        <strong>Hair Color:</strong> {props.hair_color} <br />
        <strong>Eye-Color</strong> {props.eye_color} 
        </p>
        <Link to={`/people/${props.number}`}>
        <button className="btn btn-primary">Learn More!</button>
        </Link>
        <button className="btn btn-secondary"
          onClick={() =>{

            if (isFavorite) {
              removeFromFavorites (props.characterName, `/people/${props.number}`)
            }
            else {
              addToFavorites (props.characterName, `/people/${props.number}`)
            }
          }}
          style={{color: isFavorite ? "pink" : "gray"}}
          >
            Save
        </button>
      </div>
    </div>    
  );
};

export default Character;