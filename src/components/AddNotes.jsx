import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddNotes = ({ setNotes }) => {
	const [newNotes, setNewNotes] = useState("");
	const characterLimit = 200;
    const date = new Date();
	const todayDate = date.toLocaleDateString();

	const handleChange = (e) => {
		setNewNotes(e.target.value.slice(0, characterLimit));
	};
	const handleSave = () => {
		const note = {
			id: uuidv4(),
			text: newNotes,
            date: todayDate
		};
		setNotes((prevNotes) => {
			const updatedNotes = [...prevNotes, note];
			localStorage.setItem("notes", JSON.stringify(updatedNotes));
			return updatedNotes;
		});
		setNewNotes("");
	};

	return (
		<div className="bg-slate-400 h-52 p-3 rounded-lg flex flex-col justify-between">
			<textarea
				name="note"
				id="note"
				cols="20"
				rows="6"
				className="w-full bg-slate-400 outline-none resize-none placeholder:text-black"
				placeholder="Type your notes here"
				value={newNotes}
				onChange={handleChange}
			></textarea>
			<div className="flex items-center justify-between">
				<p>{characterLimit - newNotes.length} remaining</p>
				<button
					className="bg-slate-300 py-1 px-3 rounded-lg"
					onClick={handleSave}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddNotes;
