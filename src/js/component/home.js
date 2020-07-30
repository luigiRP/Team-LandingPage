import React from "react";
import Navbar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Footer from "./footer.js";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Footer />
		</div>
	);
}
