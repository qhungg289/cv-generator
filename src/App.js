import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import "./style/App.css";

class App extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<h1>CV Creator</h1>
				<GeneralInformation />
			</div>
		);
	}
}

export default App;
