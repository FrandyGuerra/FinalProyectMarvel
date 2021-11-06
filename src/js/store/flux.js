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
			//comics: [],
			//detailsComics: [],
			characters: [],
			caracter: { personaje: null, comics: null, series: null, stories: null, events: null },
			url:
				"https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7",
			hash: "a24cd1d9263d7ae351b842fa38b4ebd7",
			apikeypublic: "d5fa6ff9a3c0a73538e2ea2229a4b3e8",
			apikeyprivate: "5e1ab9819c96bbdb36468ccbf3535ead709cda3b"
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
				fetch(getStore().url)
					.then(resp => resp.json())
					.then(data => {
						console.log(data.data.results);
						setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getCharacter: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Personaje", data.data.results);
						// const {personaje} = getStore().caracter;
						// setStore({
						// 	{personaje}: data.data.results
						//  });
					})
					.catch(error => console.log(error));
			},
			getCharacterComics: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Comics", data.data.results);
						//setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getCharacterSeries: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Series", data.data.results);
						//setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getCharacterEvents: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/events?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Eventos", data.data.results);
						//setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			},
			getCharacterStories: id => {
				fetch(
					`https://gateway.marvel.com/v1/public/characters/${id}/stories?ts=1&apikey=d5fa6ff9a3c0a73538e2ea2229a4b3e8&hash=a24cd1d9263d7ae351b842fa38b4ebd7`
				)
					.then(resp => resp.json())
					.then(data => {
						console.log("Historias", data.data.results);
						//setStore({ characters: data.data.results });
					})
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
