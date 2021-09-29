import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddMoreForm from "./AddMoreForm";
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

function Preview(props) {
	const detailList = props.details.map((item) => {
		return (
			<li
				key={uuidv4()}
			>{`${item.school}, ${item.tileOfStudy}, ${item.dateOfStudy}`}</li>
		);
	});

	return <ul className="card-preview">{detailList}</ul>;
}

export default function EducationalExperience() {
	const [details, setDetails] = useState([]);
	const [schoolInput, setSchoolInput] = useState("");
	const [tileOfStudyInput, setTileOfStudyInput] = useState("");
	const [dateOfStudyInput, setDateOfStudyInput] = useState("");
	const [isSubmit, setIsSubmit] = useState(false);
	const [isAdd, setIsAdd] = useState(false);

	function toggleEdit() {
		setIsSubmit(!isSubmit);
		setIsAdd(!isAdd);
	}

	function handleInputChange(event) {
		switch (event.target.name) {
			case "schoolInput":
				setSchoolInput(event.target.value);
				break;
			case "tileOfStudyInput":
				setTileOfStudyInput(event.target.value);
				break;
			case "dateOfStudyInput":
				setDateOfStudyInput(event.target.value);
				break;
			default:
				break;
		}
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsSubmit(true);
		setIsAdd(false);
		setDetails([
			...details,
			{
				school: schoolInput,
				tileOfStudy: tileOfStudyInput,
				dateOfStudy: dateOfStudyInput,
			},
		]);
		setSchoolInput("");
		setTileOfStudyInput("");
		setDateOfStudyInput("");
	}

	return (
		<div id="educational-experience-card" className="card">
			<h2>Educational Experience</h2>
			{isSubmit && <Preview details={details} />}
			{isAdd ? (
				<Form
					onSubmit={handleSubmit}
					onClick={toggleEdit}
					onChange={handleInputChange}
					school={schoolInput}
					tileOfStudy={tileOfStudyInput}
					dateOfStudy={dateOfStudyInput}
				/>
			) : (
				<AddMoreForm onClick={toggleEdit} />
			)}
		</div>
	);
}
