import React from "react";
import "../style/card.css";

function Form(props) {
	return (
		<form
			id="general-information-form"
			className="card-form"
			onSubmit={props.onSubmit}
		>
			<label htmlFor="name">Name:</label>
			<input
				type="text"
				name="name"
				id="name"
				required
				value={props.name}
				onChange={props.onChange}
			/>
			<label htmlFor="address">Address:</label>
			<input
				type="text"
				name="address"
				id="address"
				required
				value={props.address}
				onChange={props.onChange}
			/>
			<label htmlFor="phone">Phone number:</label>
			<input
				type="text"
				name="phoneNumber"
				id="phoneNumber"
				required
				value={props.phoneNumber}
				onChange={props.onChange}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="text"
				name="email"
				id="email"
				required
				value={props.email}
				onChange={props.onChange}
			/>
			<input type="submit" value="Submit" />
		</form>
	);
}

function Preview(props) {
	return (
		<div className="card-preview">
			<p>Name:</p>
			<p>{props.name}</p>
			<p>Address:</p>
			<p>{props.address}</p>
			<p>Phone number:</p>
			<p>{props.phoneNumber}</p>
			<p>Email:</p>
			<p>{props.email}</p>
			<button type="button" onClick={props.onClick}>
				Edit
			</button>
		</div>
	);
}

export default class GeneralInformation extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			address: "",
			phoneNumber: "",
			email: "",
			isSubmit: false,
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.editForm = this.editForm.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	submitForm(event) {
		event.preventDefault();
		this.setState({
			isSubmit: true,
		});
	}

	editForm() {
		this.setState({
			isSubmit: false,
		});
	}

	render() {
		return (
			<div id="general-information-card" className="card">
				<h2>General Information</h2>
				{this.state.isSubmit ? (
					<Preview
						onClick={this.editForm}
						name={this.state.name}
						address={this.state.address}
						phoneNumber={this.state.phoneNumber}
						email={this.state.email}
					/>
				) : (
					<Form
						onSubmit={this.submitForm}
						onChange={this.handleInputChange}
						name={this.state.name}
						address={this.state.address}
						phoneNumber={this.state.phoneNumber}
						email={this.state.email}
					/>
				)}
			</div>
		);
	}
}
