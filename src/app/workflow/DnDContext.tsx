"use client";

import type React from "react";
import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";

// Define the type for the context value
type DnDContextType = [string | null, Dispatch<SetStateAction<string | null>>];

// Create the context with a default value
const DnDContext = createContext<DnDContextType | undefined>(undefined);

export const DnDProvider = ({ children }: { children: React.ReactNode }) => {
	const [type, setType] = useState<string | null>(null);

	return (
		<DnDContext.Provider value={[type, setType]}>
			{children}
		</DnDContext.Provider>
	);
};

export default DnDContext;

export const useDnD = (): DnDContextType => {
	const context = useContext(DnDContext);
	if (!context) {
		throw new Error("useDnD must be used within a DnDProvider");
	}
	return context;
};
