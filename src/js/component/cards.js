import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Cards = (props) => {
  let links =
    props.type === "planets"
      ? `/planetView/${props.uid}`
      : `/CharacterView/${props.uid}`;
  const { store, actions } = useContext(Context);
  return (
    <div className="card mx-5 col-3 bg-dark">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
        className="card-img-top"
      />
      <h5 className="card-title text-light text-center mt-2">{props.name}</h5>
      <div className="card-body container-flex">
        <div className="float-start">
          <Link type="button" className="btn btn-light" to={links}>
            See the character info!
          </Link>
        </div>
        <div className="float-end">
          <button
            type="button"
            onClick={() => actions.addFav({ id: props.uid, name: props.name })}
          >
            <i className="fa-solid fa-heart" />
          </button>
        </div>
      </div>
    </div>
  );
};
