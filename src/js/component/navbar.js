import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export const Navbar = () => {
	return (
		<>
			<div>
				<img className="imgnav" src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg" />
			</div>

			<nav className="navbar navbar-dark bg-dark text-white mb-3">
				<div className="container">
					<div className="stylesnav">
						<div className="row">
							<div className="col-md-3">
								<Link to="/">
									<span className="navbar-brand mb-0 h1">MARVEL</span>
								</Link>
							</div>

							<div className="col-md-2">
								<Link to="/comics">Comics</Link>
							</div>
							<div className="col-md-3">
								<Link to="/characters">Characters</Link>
							</div>
							<div className="col-md-2">
								<Link to="/series">Series</Link>
							</div>
							<div className="col-md-2">
								<Link to="/creators">Creators</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
