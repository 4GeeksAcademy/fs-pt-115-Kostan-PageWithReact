import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Portada } from "./Portada";


//create your first component
const Home = () => {
	return (
		<div calssName="container">
			<div>
				<Navbar/>
				<br></br>
				<Portada/>
			</div>
		</div>
	);
};

export default Home;