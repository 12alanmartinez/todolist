import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import List from "../component/Todo.jsx";
//create your first component
const Home = () => {
	return (
		<div>
			<List />
		</div>
	);
};

export default Home;
