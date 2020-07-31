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
			<Navbar
				brand="Start Bootstrap"
				item1="Home"
				item2="About"
				item3="Services"
				item4="Contact"
			/>
			<Jumbotron
				title="A Warm Welcome!"
				description="It uses utility classes for typography and spacing to space
                content out within the larger container."
				link="Learn more"
			/>
			<div className="d-flex container justify-content-between px-0">
				<Cards
					title="Primer Carta"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
				/>
				<Cards
					title="Segunda Carta"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
				/>
				<Cards
					title="Tercera Carta"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
				/>
				<Cards
					title="Cuarta Carta"
					description="Some quick example text to build on the card title and make up the bulk of the card's content."
				/>
			</div>
			<Footer />
		</div>
	);
}
