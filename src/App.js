import "./App.scss";
// import Loader from "./components/loader/Loader";
import { useEffect, useState } from "react";
// import Background from "./components/background/Background";
// import Kartik from "./components/background/Kartik";
// import Navbar from "./components/navbar/Navbar";

function App() {
	const [isLoading, setLoading] = useState(true);

	// REDIRECT TO DEV FOR NOW
	window.location.href = "https://kartikwatts.github.io/dev";

	function fakeRequest() {
		// return new Promise((resolve) => setTimeout(() => resolve(), 2500));
		return new Promise((resolve) => setTimeout(() => resolve(), 0));
	}

	useEffect(() => {
		if (isLoading) {
			console.log("useEffect called");
			fakeRequest().then(() => {
				console.log("page loaded");
				document
					.querySelector("#pre-loader")
					.classList.add("loader-fade");
				setLoading(!isLoading);
				setTimeout(() => {
					document.querySelector("#pre-loader").remove();
				}, 500);
			});
		}
	}, [isLoading]);

	return (
		<>
			{/* <Loader />
			<div>
				<Background />
				<Navbar />
				<div className="brand-layer">{!isLoading && <Kartik />}</div>
			</div> */}
		</>
	);
}

export default App;
