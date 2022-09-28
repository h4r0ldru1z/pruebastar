import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const CharacterView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.characterIndividual);
	useEffect(() => {
		if (params?.theid) {
		actions.informacionIndividualPeople(params?.theid);
		}
		}, [params?.theid]);
	return (
		<>
  <div className="card mb-3 bg-secondary">
    <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/characters/${params.theid}.jpg`} alt="Card image cap" />
    <div className="card-body container">
      <h3 className="card-title text-center font-weight-bold">{store.characterIndividual?.name}</h3>
	  <div className="row">
		<div className="col">
			<p className="font-weight-bold text-light">Name</p>
			<p>{store.characterIndividual?.name}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Birth Year</p>
			<p>{store.characterIndividual?.birth_year}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Gender</p>
			<p>{store.characterIndividual?.gender}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Height</p>
			<p>{store.characterIndividual?.height}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Skin Color</p>
			<p>{store.characterIndividual?.skin_color}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Eye Color</p>
			<p>{store.characterIndividual?.eye_color}</p>
		</div>
	  </div>
    </div>
  </div>
  
</>
	);
};
