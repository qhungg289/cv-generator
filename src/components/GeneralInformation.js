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
			<label htmlFor="phoneNumber">Phone number:</label>
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
			<div className="btn-wrapper">
				<input type="submit" value="Submit" />
			</div>
		</form>
	);
}

function Preview(props) {
	return (
		<div className="card-preview">
			<label>Name:</label>
			<p>{props.name}</p>
			<label>Address:</label>
			<p>{props.address}</p>
			<label>Phone number:</label>
			<p>{props.phoneNumber}</p>
			<label>Email:</label>
			<p>{props.email}</p>
			<div className="btn-wrapper">
				<button type="button" onClick={props.onClick}>
					Edit
				</button>
			</div>
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
		this.togglePreview = this.togglePreview.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}

	togglePreview(event) {
		event.preventDefault();
		this.setState((prevState) => ({
			isSubmit: !prevState.isSubmit,
		}));
	}

	render() {
		return (
			<div id="general-information-card" className="card">
				<h2>General Information</h2>
				{this.state.isSubmit ? (
					<Preview
						onClick={this.togglePreview}
						name={this.state.name}
						address={this.state.address}
						phoneNumber={this.state.phoneNumber}
						email={this.state.email}
					/>
				) : (
					<Form
						onSubmit={this.togglePreview}
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
