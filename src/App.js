import logo from "./logo.svg";
import "./App.scss";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function App() {
	const [isLoading, setLoading] = useState(true);

	function fakeRequest() {
		return new Promise((resolve) => setTimeout(() => resolve(), 2500));
	}

	useEffect(() => {
		if (isLoading) {
			console.log("useEffect called");
			fakeRequest().then(() => {
			console.log("page loaded");
			document.querySelector("#pre-loader").classList.add("loader-fade");
			setLoading(!isLoading);
			});
		}
	}, [isLoading]);

	return (
		<>
			<Loader />
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h3>
						Under Development. <br />
						Regards, Kartik Watts
					</h3>
				</header>
			</div>
		</>
	);
}

export default App;
