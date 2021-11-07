import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

export const Navbar = () => {
	return (
<<<<<<< HEAD
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
=======
		<nav className="bg-dark text-white m-0">
			<div className="container-fluid ">
				<div className="row">
					<div className="col border-bottom ">
						<Link to="/">
							<img
								style={{ width: "150px", height: "50px", display: "block", margin: "0 auto" }}
								className="pb-2"
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
							/>
						</Link>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/comics">
								Comics
							</Link>
						</div>
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/characters">
								Characters
							</Link>
						</div>
						<div className="col-md-3 text-center paginas" style={{ borderRight: "1px solid white" }}>
							<Link style={{ textDecoration: "none", color: "white" }} to="/series">
								Series
							</Link>
						</div>
						<div className="col-md-3 text-center paginas">
							<Link style={{ textDecoration: "none", color: "white" }} to="/creators">
								Creators
							</Link>
>>>>>>> ceb579d276b4ea140136603836d2b9643b1900f6
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};
