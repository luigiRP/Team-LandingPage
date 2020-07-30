import React from "react";

export default function Navbar() {
	return (
		<div class="container-fluid bg-dark">
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark container">
				<a href="#" class="navbar-brand">
					Start Bootstrap
				</a>
				<div class="collapse navbar-collapse">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a href="#" class="nav-link text-white">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">
								About
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">
								Services
							</a>
						</li>
						<li class="nav-item">
							<a href="#" class="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
