import React, { useState, useEffect } from "react";
import {
	getTodos,
	createTodos,
	updateTodos,
	deleteTodos,
} from "../component/API.js";

const List = () => {
	const [todo, setTodo] = useState("");
	const [list, setList] = useState([]);

	//GET
	useEffect(() => {
		const fn = async () => {
			const response = await getTodos();
			setList(response.map((x) => x.label));
		};

		fn();
		console.log(list);
	}, []);

	//POST
	useEffect(() => {
		const fn = async () => {
			await updateTodos(list.map((x) => ({ label: x, done: false })));
		};
		fn();
	}, [list]);

	const createNewTodo = (event) => {
		if (event.key === "Enter" && tasks.trim().length > 0) {
			let newList = [...list, tasks];

			setList(newList);
			setTasks("");
		}
	};
	const deleteTodos = (index) => {
		let del = list.filter((list, i) => index !== i);
		setList(del);
	};

	return (
		<div className="title">
			Todo List
			<div className="contanier">
				<input
					type="text"
					value={todo}
					onChange={(ev) => setTodo(ev.target.value)}
					// // onKeyUp={(e) => {
					// // 	if (e.key === 13) {
					// // 		let newList = [...list, todo];
					// // 		setList(newList);
					// // 		setTodo("");
					// 	}
					// }}
				/>
				<button
					onClick={() => {
						let newList = [...list, todo];
						setList(newList);
						setTodo("");
					}}
					type="submit">
					add task
				</button>

				<div className="list">
					<ul>
						{list.map((item, index) => {
							return (
								<>
									<li key={index}>{item}</li>
									<button
										onClick={() => {
											deleteTodos(index);
										}}>
										Remove
									</button>
								</>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};
export default List;
