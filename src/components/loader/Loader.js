import React from "react";
import "../../App.scss";
import Logo from "./logo";

const Loader = () => {
	return (
		<div id="pre-loader">
			<span className="loader">
				<Logo />
			</span>
		</div>
	);
};

export default Loader;
