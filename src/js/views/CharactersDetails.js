import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharactersDetails = () => {
	const { store, actions } = useContext(Context);
	const { character_id } = useParams();

	useEffect(() => {
		actions.getCharacter(character_id);
		actions.getCharacterEvents(character_id);
		actions.getCharacterSeries(character_id);
		actions.getCharacterComics(character_id);
		actions.getCharacterStories(character_id);
	}, []);
	return (
		<>
			<div className="container">
				<h1>Characters Details</h1>
				<div className="row">
					<div className="col-md-4">
						<div className="card">
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">hola</h5>
								<p className="card-text"> description </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
