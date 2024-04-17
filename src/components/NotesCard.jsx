import React from "react";
import { MdDeleteForever } from "react-icons/md";

const NotesCard = ({ notes, deleteNotes }) => {
	return (
		<>
			{notes.map((note) => (
				<div
					key={note.id}
					className="bg-yellow-400 h-52 p-3 rounded-lg flex flex-col justify-between"
				>
					<p className="">{note.text}</p>
					<div className=" flex items-center justify-between">
						<p>{note.date} {note.time}</p>
						<button onClick={() => {
                            deleteNotes(note.id)
                        }}>
							<MdDeleteForever className="h-6 w-6 text-red-600" />
						</button>
					</div>
				</div>
			))}
		</>
	);
};

export default NotesCard;
