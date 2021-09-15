import React from "react";
import { v4 as uuidv4 } from "uuid";
import AddMoreForm from "./AddMoreForm";
import "../style/card.css";

function Form(props) {
	return (
		<form
			id="practical-experience-form"
			className="card-form"
			onSubmit={props.onSubmit}
		>
			<label htmlFor="company">Company:</label>
			<input
				type="text"
				name="companyInput"
				id="company"
				required
				value={props.company}
				onChange={props.onChange}
			/>
			<label htmlFor="position">Position:</label>
			<input
				type="text"
				name="positionInput"
				id="position"
				required
				value={props.position}
				onChange={props.onChange}
			/>
			<label htmlFor="mainTask">Main tasks of previous job:</label>
			<input
				type="text"
				name="mainTaskInput"
				id="mainTask"
				required
				value={props.mainTask}
				onChange={props.onChange}
			/>
			<label htmlFor="from">From:</label>
			<input
				type="date"
				name="fromInput"
				id="from"
				required
				value={props.from}
				onChange={props.onChange}
			/>
			<label htmlFor="until">Until:</label>
			<input
				type="date"
				name="untilInput"
				id="until"
				required
				value={props.until}
				onChange={props.onChange}
			/>
			<div className="btn-wrapper">
				<input type="button" value="Cancel" onClick={props.onClick} />
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

function Preview(props) {
	const detailList = props.details.map((item) => {
		return (
			<li
				key={uuidv4()}
			>{`${item.company}, ${item.position}, ${item.mainTask}, ${item.from}, ${item.until}`}</li>
		);
	});

	return <ul className="card-preview">{detailList}</ul>;
}

export default class PracticalExperience extends React.Component {
	constructor() {
		super();
		this.state = {
			details: [],
			companyInput: "",
			positionInput: "",
			mainTaskInput: "",
			fromInput: "",
			untilInput: "",
			isSubmit: false,
			isAdd: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
					company: this.state.companyInput,
					position: this.state.positionInput,
					mainTask: this.state.mainTaskInput,
					from: this.state.fromInput,
					until: this.state.untilInput,
				},
			],
			companyInput: "",
			positionInput: "",
			mainTaskInput: "",
			fromInput: "",
			until: "",
		});
	}

	render() {
		return (
			<div id="practical-experience-card" className="card">
				<h2>Practical Experience</h2>
				{this.state.isSubmit && <Preview details={this.state.details} />}
				{this.state.isAdd ? (
					<Form
						onSubmit={this.handleSubmit}
						onClick={this.toggleEdit}
						onChange={this.handleInputChange}
						company={this.state.companyInput}
						position={this.state.positionInput}
						mainTask={this.state.mainTaskInput}
						from={this.state.fromInput}
						until={this.state.untilInput}
					/>
				) : (
					<AddMoreForm onClick={this.toggleEdit} />
				)}
			</div>
		);
	}
}
