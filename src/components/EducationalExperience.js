import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/card.css";

function Form(props) {
	return (
		<form
			id="educational-experience-form"
			className="card-form"
			onSubmit={props.onSubmit}
		>
			<label htmlFor="school">School:</label>
			<input
				type="text"
				name="schoolInput"
				id="school"
				required
				value={props.school}
				onChange={props.onChange}
			/>
			<label htmlFor="tileOfStudy">Tile of study:</label>
			<input
				type="text"
				name="tileOfStudyInput"
				id="tileOfStudy"
				required
				value={props.tileOfStudy}
				onChange={props.onChange}
			/>
			<label htmlFor="dateOfStudy">Date of study:</label>
			<input
				type="date"
				name="dateOfStudyInput"
				id="dateOfStudy"
				value={props.dateOfStudy}
				onChange={props.onChange}
			/>
			<div className="btn-wrapper">
				<input type="button" value="Cancel" onClick={props.onClick} />
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

function AddMoreForm(props) {
	return (
		<div className="btn-wrapper">
			<input type="button" value="Add" onClick={props.onClick} />
		</div>
	);
}

function Preview(props) {
	const detailList = props.details.map((item) => {
		return (
			<li
				key={uuidv4()}
			>{`${item.school}, ${item.tileOfStudy}, ${item.dateOfStudy}`}</li>
		);
	});

	return <ul>{detailList}</ul>;
}

export default class EducationalExperience extends React.Component {
	constructor() {
		super();
		this.state = {
			details: [],
			schoolInput: "",
			tileOfStudyInput: "",
			dateOfStudyInput: "",
			isSubmit: false,
			isAdd: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	toggleEdit() {
		this.setState((prevState) => ({
			isSubmit: !prevState.isSubmit,
			isAdd: !prevState.isAdd,
		}));
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			isSubmit: true,
			isAdd: false,
			details: [
				...this.state.details,
				{
					school: this.state.schoolInput,
					tileOfStudy: this.state.tileOfStudyInput,
					dateOfStudy: this.state.dateOfStudyInput,
				},
			],
			schoolInput: "",
			tileOfStudyInput: "",
			dateOfStudyInput: "",
		});
	}

	render() {
		return (
			<div id="educational-experience-card" className="card">
				<h2>Educational Experience</h2>
				{this.state.isSubmit && <Preview details={this.state.details} />}

				{this.state.isAdd ? (
					<Form
						onSubmit={this.handleSubmit}
						onClick={this.toggleEdit}
						onChange={this.handleInputChange}
						school={this.state.schoolInput}
						tileOfStudy={this.state.tileOfStudyInput}
						dateOfStudy={this.state.dateOfStudyInput}
					/>
				) : (
					<AddMoreForm onClick={this.toggleEdit} />
				)}
			</div>
		);
	}
}
