import { useContext, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Notes from "./components/Notes";
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
	const { toogleMode } = useContext(DarkModeContext)
	const [search, setSearch] = useState("");

	return (
		<div
			className={`${
				toogleMode && "bg-black"
			} min-h-screen w-full font-poppins`}
		>
			<main className="min-h-screen max-w-[960px] mx-auto py-4 px-2">
				<Header/>
				<SearchBar search={search} setSearch={setSearch} />
				<Notes search={search} />
			</main>
		</div>
	);
}

export default App;
