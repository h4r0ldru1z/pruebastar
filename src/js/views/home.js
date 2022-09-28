import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";
export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>{
		actions.getCharacters()
		actions.getPlanets()
	},[])
	
	return (
	<div className="container-fluid bg-secondary">
		<h1 className="text-light">Star Wars characters</h1>
		<div className="overflow-auto">
		<div className="d-flex">
			{store.characters.map((character, index)=>{
				return (<Cards key = {index} name = {character.name} uid ={character.uid} ></Cards>)
			})}
		</div>	
		</div>
		<span>
		</span>
		<h1 className="text-light">Star Wars Planets</h1>
		<div className="overflow-auto">
			<div className="d-flex">
			{store.planets.map((planet, index)=>{
				return (<Planets key = {index} name = {planet.name} uid ={planet.uid} ></Planets>)
			})}
	
			</div>
		</div>
	</div>

	)
};
