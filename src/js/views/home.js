import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Planets } from "../component/planets";
export const Home = () => {
	return (
	<div className="container-fluid">
		<h1>Star Wars characters</h1>
		<div className="row mx-md-n5">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
		<span>
		</span>
		<h1>Star Wars Planets</h1>
		<div className="row">
			<Planets/>
			<Planets/>
			<Planets/>
			<Planets/>
			<Planets/>
		</div>
	</div>

	)
};
