import React, { useEffect, useState } from "react";
import "./App.scss";

import axios from "axios";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectsGallery from "./components/ProjectsGallery";
import Footer from "./components/Footer";
import GoogleMapsComponent from "./components/GoogleMap";
import { ProjectProps } from "./types";

export default function App() {
  const [projects, setProjects] = useState([]);

	const fetchData = async () => {
		try {
			const response = await axios.get("http://localhost:3001/");
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
			{projects.map((project: ProjectProps) => (
				<div key={project.id}>
					<h1>{project.title}</h1>
					<p>{project.description}</p>
				</div>
			))}
      <ProjectsGallery />
      <GoogleMapsComponent />
      <Footer />
    </div>
  );
}
