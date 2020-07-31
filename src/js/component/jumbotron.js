import React from "react";
import Buttom from "./buttom";

export default function Jumbotron(props) {
	return (
		<div className="jumbotron container my-3">
			<h1 className="display-4">{props.title}</h1>
			<p>{props.description}</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					<Buttom description="Learn More!" />
				</a>
			</p>
		</div>
	);
}
