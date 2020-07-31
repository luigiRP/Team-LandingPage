import React from "react";

export default function Navbar(props) {
	return (
		<div className="container-fluid bg-dark">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
				<a href="#" className="navbar-brand">
					{props.brand}
				</a>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a href="#" className="nav-link text-white">
								{props.item1}
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								{props.item2}
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								{props.item3}
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link">
								{props.item4}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
