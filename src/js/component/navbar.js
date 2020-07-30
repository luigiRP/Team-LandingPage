import React from "react";

export default function Navbar() {
	return (
		<div className="container-fluid bg-dark">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
				<a href="#" className="navbar-brand">
					Start Bootstrap
				</a>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#" className="nav-link text-white">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
