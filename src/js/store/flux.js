import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[
			],
			planets:[
			],
			characterIndividual:[
			],
			imagenPeople:[
			],
			planetaIndividual:[
			],
			imagenPlanet:[
			],
			favorites:[
			],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addFav: (item) => {
				let arr = getStore().favorites
				arr.push(item)
				setStore({favorites:arr})
			},
			removeFav: (index) => {
				let arr = getStore().favorites
				let x = arr.filter((e,i) => i!= index)
				setStore({favorites:x})
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people/")
				.then((Response)=>Response.json())
				.then((data)=>{
					console.log(data);
					setStore({characters: data.results})
				})
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((Response)=>Response.json())
				.then((data)=>{
					setStore({planets: data.results})
				})
			},
			informacionIndividualPeople: (id) => {
				fetch("https://www.swapi.tech/api/people/" + id)
				  .then((resp) => resp.json())
				  .then((resp) =>
					setStore({ characterIndividual: resp.result.properties })
				  )
				  .catch((err) => console.error(err));
			},
			imagenCharacter: (id)=>{
				fetch("https://www.starwars-visualguide.com/assets/img/people/" + id +".jpg")
				  .then((resp) => resp.json())
				  .then((resp) =>
					setStore({ imagenPeople: resp })
				  )
				  .catch((err) => console.error(err));
			},
			informacionIndividualPlaneta: (id) => {
				fetch("https://www.swapi.tech/api/planets/" + id)
				  .then((resp) => resp.json())
				  .then((resp) =>
					setStore({ planetaIndividual: resp.result.properties })
				  )
				  .catch((err) => console.error(err));
			},
			imagenPlaneta: (id)=>{
				fetch("https://starwars-visualguide.com/assets/img/planets/" + id +".jpg")
				  .then((resp) => resp.json())
				  .then((resp) =>
					setStore({ imagenPlanet: resp })
				  )
				  .catch((err) => console.error(err));
			}
		}
		
	};
};

export default getState;
