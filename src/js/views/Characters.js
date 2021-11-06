import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container">
				<h1>Characters</h1>
				<div className="row">
					{store.characters.map(char => {
						return (
							<div key={char.id} className="col-md-4">
								<div className="card">
									<img
										className="card-img-top"
										src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{char.name}</h5>
										<p className="card-text">{char.description} </p>
										<Link to={`/characters/${char.id}`} className="btn btn-primary">
											Go somewhere
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
