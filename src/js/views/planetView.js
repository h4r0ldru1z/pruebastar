import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



export const PlanetView = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planetaIndividual);
	useEffect(() => {
		if (params?.theid) {
		actions.informacionIndividualPlaneta(params?.theid);
		}
		}, [params?.theid]);
	return (
		<>
  <div className="card mb-3 bg-secondary">
    <img className="card-img-top" src={`https://starwars-visualguide.com/assets/img/planets/${params.theid}.jpg`} alt="Card image cap" />
    <div className="card-body container">
      <h3 className="card-title text-center font-weight-bold">{store.planetaIndividual?.name}</h3>
	  <div className="row">
		<div className="col">
			<p className="font-weight-bold text-light">Name</p>
			<p>{store.planetaIndividual?.name}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Diameter</p>
			<p>{store.planetaIndividual?.diameter}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Rotation Period</p>
			<p>{store.planetaIndividual?.rotation_period}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Population</p>
			<p>{store.planetaIndividual?.population}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Climate</p>
			<p>{store.planetaIndividual?.climate}</p>
		</div>
		<div className="col">
			<p className="font-weight-bold text-light">Terrain</p>
			<p>{store.planetaIndividual?.terrain}</p>
		</div>
	  </div >
    </div>
  </div>
  
</>
	);
};
