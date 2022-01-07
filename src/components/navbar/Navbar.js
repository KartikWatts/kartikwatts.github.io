import React from "react";
import kk from "../../images/KK.svg";

function Navbar() {
	let isHovered = false;
	let isClicked = false;

	return (
		<>
			<div className="menu-overlay"> </div>
			<div className="main-menu"> </div>
			<div className="nav-layer">
				<img className="nav-brand" src={kk} alt="kk" />
				<div className="nav-links">
					<div>Tech</div>
					<div>Projects</div>
					<div>Contact</div>
				</div>
				<div
					className="menu-bar"
					onMouseEnter={() => {
						isHovered = true;
						let bars = [...document.querySelectorAll(".bar")];
						if (!isClicked) {
							bars[0].style.transform =
								"translateY(6px) rotate(90deg)";
							bars[2].style.opacity = 0;
						}
					}}
					onMouseLeave={() => {
						isHovered = false;
						let bars = [...document.querySelectorAll(".bar")];
						if (!isClicked) {
							bars[0].style.transform = "translateY(0)";
							bars[1].style.transform = "translateY(0)";
							bars[2].style.opacity = 1;
						}
					}}
					onClick={() => {
						let bars = [...document.querySelectorAll(".bar")];
						let menuOverlay =
							document.querySelector(".menu-overlay");
						let mainMenu = document.querySelector(".main-menu");
						if (!isClicked) {
							bars[0].style.transform =
								"translateY(6px) rotate(135deg)";
							bars[1].style.transform =
								"translateY(-1px) rotate(45deg)";
							bars[2].style.opacity = 0;
							setTimeout(() => {
								menuOverlay.style.width = "100vw";
								mainMenu.style.width = "40vw";
							}, 500);
						} else {
							bars[0].style.transform =
								"translateY(6px) rotate(90deg)";
							bars[1].style.transform = "translateY(0)";
							menuOverlay.style.width = "0vw";
							mainMenu.style.width = "0vw";
						}
						isClicked = !isClicked;
					}}
				>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
