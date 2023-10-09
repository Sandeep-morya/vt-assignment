// import React from 'react'

import { Stack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<Stack p={"1rem"}>
			<Navbar />
			<HomePage />
		</Stack>
	);
};

export default App;
