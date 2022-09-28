import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { element } from "prop-types";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favorites);
  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/922/922809.png"
          width={50}
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle bg-dark"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           favorites
          </a>
          <ul className="dropdown-menu">
            {store.favorites.map((element, i) => {
              return (
			  <li>{element.name}
			<button  className="btn btn-danger opacity-50" type="button" onClick={() => actions.removeFav(i)}>
            X
          </button></li>);
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
