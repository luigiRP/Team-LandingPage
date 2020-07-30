import React from "react";
import Buttom from "./buttom.js";
import Cards from "./card.js";
//create your first component
export function Home() {
	return (
		<div className="d-flex display-flex container">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
	);
}
