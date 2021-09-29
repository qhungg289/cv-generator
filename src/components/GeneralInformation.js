import React, { useState } from "react";
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
				type="tel"
				name="phoneNumber"
				id="phoneNumber"
				required
				value={props.phoneNumber}
				onChange={props.onChange}
			/>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
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

export default function GeneralInformation() {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [isSubmit, setIsSubmit] = useState(false);

	function togglePreview(event) {
		event.preventDefault();
		setIsSubmit(!isSubmit);
	}

	function handleInputChange(event) {
		switch (event.target.name) {
			case "name":
				setName(event.target.value);
				break;
			case "address":
				setAddress(event.target.value);
				break;
			case "phoneNumber":
				setPhoneNumber(event.target.value);
				break;
			case "email":
				setEmail(event.target.value);
				break;
			default:
				break;
		}
	}

	return (
		<div id="general-information-card" className="card">
			<h2>General Information</h2>
			{isSubmit ? (
				<Preview
					onClick={togglePreview}
					name={name}
					address={address}
					phoneNumber={phoneNumber}
					email={email}
				/>
			) : (
				<Form
					onSubmit={togglePreview}
					onChange={handleInputChange}
					name={name}
					address={address}
					phoneNumber={phoneNumber}
					email={email}
				/>
			)}
		</div>
	);
}
