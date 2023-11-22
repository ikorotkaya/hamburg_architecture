import React, { useEffect, useState } from "react";
import "./App.scss";

import rawProjects from "./data/final_projects";

import Header from "./components/Header";
import GoogleMapsComponent from "./components/GoogleMap";
import { ProjectProps } from "./types";

import { useTranslation } from "react-i18next";
import "./i18n";

export default function App() {
	const { i18n } = useTranslation();
	const [locale, setLocale] = useState<string>("de");
	const [projects, setProjects] = useState<ProjectProps[]>([]);

useEffect(() => {
	setLocale(i18n.language);
	setProjects(rawProjects);
	console.log("i18n.language", i18n.language);
}
, [i18n.language]);

return (
	<div className="app">
		<div className="app__inner">
			<Header />
			<GoogleMapsComponent projects={projects} locale={locale}/>
		</div>
	</div>
);
}
