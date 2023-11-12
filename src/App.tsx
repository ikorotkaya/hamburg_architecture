import React from "react";
import "./App.scss";


import Header from "./components/Header";
import GoogleMapsComponent from "./components/GoogleMap";



export default function App() {

return (
	<div className="app">
		<div className="app__inner">
			<Header />
			<GoogleMapsComponent />
		</div>
	</div>
);
}
