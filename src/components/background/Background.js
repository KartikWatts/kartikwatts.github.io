import shree from "../../images/Shree_Chakra.svg";
import om from "../../images/Om.svg";
import conch from "../../images/Conch.svg";
import swastik from "../../images/Swastik.svg";
import veena from "../../images/Veena.svg";
import React from "react";
import "../../App.scss";

function Background() {
	return (
		<div className="page-background">
			<img className="bg-shree" src={shree} alt="shree" />
			<img className="bg-om" src={om} alt="om" />
			<img className="bg-conch" src={conch} alt="conch" />
			<img className="bg-swastik" src={swastik} alt="swastik" />
			<img className="bg-veena" src={veena} alt="veena" />
		</div>
	);
}

export default Background;
