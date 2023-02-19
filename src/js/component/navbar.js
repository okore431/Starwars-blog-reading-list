import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star_Wars_Logo.svg.png";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../store/slice";


export const Navbar = () => {
	const favorites = useSelector((state) => state.favorite.favorites); // Get the value of the favorites from the Redux store
	const dispatch = useDispatch(); // Utilizing useDispatch from Redux Toolkit
	const [dropdownOpen, setDropdownOpen] = useState(false);  // Setting up the state to control manual opening/closing of the Favorites button

	const placeFavorite = (title, url) => {  // Making sure we are adding the Favorites to the list
		dispatch(addFavorite({ title, url }));
	  };

	  const removeFavorite = (event, title, url) => {  // Setting up the Delete function
		event.stopPropagation(); // I had to place it in the end, so I wouldn't click multiple times on the Favorties button to open it. Now I rarely need to click more than once.
		console.log(title, url);
		dispatch(deleteFavorite({ title, url }));
	  };

	  const toggleDropdown = () => {  // Opening the dropdown menu
		setDropdownOpen(!dropdownOpen);
	  };

	  const favoriteElements = favorites
    ? favorites.map((fav, index) => { // Map through the favorite titles and create an array of <li> elements
    return (
      <li className="m-2 mx-3 d-flex align-items-center justify-content-between" key={index}>
        <div className="col"><Link className="link-design" to={fav.url}>{fav.title}</Link></div> {/* Showing the title + link in the list */}
        <div className="col text-end">
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={(event) => removeFavorite(event, fav.title, fav.url) /* This code makes sure that the list won't close when we deleting an item */}
          >

			X
          </button>
        </div>
      </li>
    );
  }) : null;

	return (
		<nav className="navbar navbar-black bg-black mb-3">
			<Link to="/">
				<img src={logo}style={{ height: "50px", marginLeft: "30px"  }} />
			</Link>
			
				<div className="dropdown myDropdown">
				<button
				    onClick={toggleDropdown}
					className="btn btn-outline-warning dropdown-toggle pl-5 pr-5" style={{marginRight: "30px", marginBottom: "20px"}}
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
			    <ul
          className={`dropdown-menu dropdown-menu-end ${
            dropdownOpen ? "show" : ""
          } ${favoriteElements.length === 0 ? "empty-menu" : ""}`}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            minWidth: "100%",
          }}
        >
          {favoriteElements.length === 0 ? (
            <p className="m-3 text-center fw-bold">Empty</p>
          ) : (
            favoriteElements
          )}
        </ul>
		</div>
		</nav>
	);
};
