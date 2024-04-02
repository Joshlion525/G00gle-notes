import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({search, setSearch}) => {
	return (
		<div className="mt-4 bg-slate-300 w-full px-3 py-2 flex items-center gap-3 rounded-xl">
			<FaSearch />
			<input
				type="text"
				placeholder="Search for your notes"
				className="w-full bg-slate-300 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchBar;
