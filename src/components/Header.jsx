import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = ({ toogleMode, setToogleMode }) => {
	return (
		<div className="flex items-center justify-between">
			<h1 className={`${toogleMode && "text-white"} font-bold text-2xl`}>
				Google Notes
			</h1>
			<button
				className={`${
					toogleMode ? "bg-transparent" : "bg-slate-400"
				} p-1 rounded-full`}
				onClick={() => setToogleMode(!toogleMode)}
			>
				{toogleMode ? (
					<MdLightMode className="h-6 w-6 text-white" />
				) : (
					<MdDarkMode className="h-6 w-6" />
				)}
			</button>
		</div>
	);
};

export default Header;
