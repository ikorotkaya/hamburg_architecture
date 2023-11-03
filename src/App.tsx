import React, { useEffect, useState } from "react";
import "./App.scss";

import axios from "axios";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GoogleMapsComponent from "./components/GoogleMap";

export default function App() {
  const [projects, setProjects] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3001/projects");
			const data = response.data;
			setProjects(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

useEffect(() => {
	fetchData();
}, []);

return (
	<div className="app">
		<Navbar />
		<Header />
		<Projects projects={projects} />
		<GoogleMapsComponent projects={projects} />
		<Footer />
	</div>
);
}
