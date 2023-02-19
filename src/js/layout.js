import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import store from "./store/store";
import {Provider} from "react-redux";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DescriptionChar from "./views/descriptionchar";
import DescriptionVeh from "./views/descriptionveh";
import DescriptionPlan from "./views/descriptionplan";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
		<Provider store={store}> {/* Setting up the global state from Redux Toolkit */}
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/people/:number" element={<DescriptionChar />} />
						<Route path="/vehicles/:number" element={<DescriptionVeh />} />
						<Route path="/planets/:number" element={<DescriptionPlan />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</Provider>
		</div>
	);
};

export default Layout;
