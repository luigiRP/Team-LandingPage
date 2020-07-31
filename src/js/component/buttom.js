import React from "react";

export default function Buttom(props) {
	return (
		<a href="#" className="btn btn-primary btn-large">
			{props.description}
		</a>
	);
}
