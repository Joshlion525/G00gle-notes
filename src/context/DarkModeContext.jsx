import { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext({});

const DarkModeContextProvider = ({ children }) => {
	const [toogleMode, setToogleMode] = useState(() => {
		const storedToogle = localStorage.getItem("darkMode");
		return storedToogle ? JSON.parse(storedToogle) : false;
	});

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(toogleMode));
	}, [toogleMode]);

	const contextValue = {
		toogleMode,
		setToogleMode,
	};
	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};

export default DarkModeContextProvider;
