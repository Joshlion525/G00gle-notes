import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Notes from "./components/Notes";

function App() {
	const [toogleMode, setToogleMode] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<div
			className={`${
				toogleMode && "bg-black"
			} min-h-screen w-full font-poppins`}
		>
			<main className="min-h-screen max-w-[960px] mx-auto py-4 px-2">
				<Header toogleMode={toogleMode} setToogleMode={setToogleMode} />
				<SearchBar search={search} setSearch={setSearch} />
        <Notes search={search} />
			</main>
		</div>
	);
}

export default App;
