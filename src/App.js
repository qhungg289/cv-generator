import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";
import "./style/App.css";

export default class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div>
					<h1>CV Creator</h1>
				</div>
				<GeneralInformation />
				<EducationalExperience />
				<PracticalExperience />
			</div>
		);
	}
}
