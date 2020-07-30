import React from "react";

export default function Jumbotron() {
	return (
		<div className="jumbotron container my-5">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
}
