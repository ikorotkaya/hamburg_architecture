import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectsGallery from "./components/ProjectsGallery";
import Footer from "./components/Footer";
import GoogleMapsComponent from "./components/GoogleMap";

export default function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<ProjectsGallery />
			<GoogleMapsComponent />
			<Footer />
		</div>
      
	);
}