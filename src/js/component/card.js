import React from "react";
import Buttom from "./buttom";

export default function Cards() {
	return (
		<div className="mx-3 mb-3">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/500x325"
				alt="Card image cap"
			/>

			<div className="card-body ">
				<h5 className="card-title pl-5">Card title</h5>
				<p className="card-text text-center">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
			</div>
			<div className=" card-footer pl-5 d-flex juntify-content-center">
				<Buttom />
			</div>
		</div>
	);
}
