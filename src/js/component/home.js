import React from "react";
import Buttom from "./buttom.js";
import Cards from "./card.js";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Footer from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="d-flex container justify-content-between px-0">
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
