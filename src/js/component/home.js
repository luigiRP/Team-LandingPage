import React from "react";
import Buttom from "./buttom.js";
import Cards from "./card.js";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Footer from "./footer.js";
//create your first component
export function Home() {
	return (
    <Navbar />
			<Jumbotron />
    <div className="d-flex display-flex container">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
    </div>
			<Footer />
		
	
			

	);
}
