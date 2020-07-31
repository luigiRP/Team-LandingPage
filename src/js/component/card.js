import React from "react";
import Buttom from "./buttom";

export default function Cards(props) {
	return (
		<div className="mx-3 mb-3">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/500x325"
				alt="Card image cap"
			/>

			<div className="card-body ">
				<h5 className="card-title pl-5">{props.title}</h5>
				<p className="card-text text-center">{props.description}</p>
			</div>
			<div className=" card-footer ">
				<div className="w-100 d-flex justify-content-center">
					<Buttom description="Find Out More!" />
				</div>
			</div>
		</div>
	);
}
