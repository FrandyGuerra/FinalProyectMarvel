import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">MARVEL</span>
			</Link>
			<div className="ml-auto">
				<Link to="/comics">
					<button className="btn btn-primary">Comics</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/series">
					<button className="btn btn-primary">Series</button>
				</Link>
			</div>
			<div className="ml-auto">
				<Link to="/creators">
					<button className="btn btn-primary">Creators</button>
				</Link>
			</div>
		</nav>
	);
};
