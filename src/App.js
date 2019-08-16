import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';

import About from './components/pages/About';
import Index from './components/pages/Index';

import uuid from 'uuid';
import axios from 'axios';

import './App.scss';

const App = () => {
	// toggle complete
	const toggleComplete = (id) => {
		const newArr = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		setTodos(newArr);
	};

	// delete todo
	const deleteTodo = (id) => {
		axios
			.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) => {
				console.log(res);
				const newArr = todos.filter((todo) => todo.id !== id);
				setTodos(newArr);
			});
	};

	// add todo
	const addTodo = (title) => {
		let newObj = {title, completed: false};
		axios
			.post(`http://jsonplaceholder.typicode.com/todos`, newObj)
			.then((res) => {
				newObj = {...res.data, id: uuid.v4()}; //overwriting the duplicate key issue up
				setTodos((prev) => [...prev, newObj]);
			});
	};

	const Index2 = () => {
		return (
			<Index
				addTodo={addTodo}
				deleteTodo={deleteTodo}
				toggleComplete={toggleComplete}
				todos={todos}
			/>
		);
	};

	const [todos, setTodos] = useState([]);
	useEffect(() => {
		axios
			.get('http://jsonplaceholder.typicode.com/todos?_limit=20')
			.then((res) => setTodos(res.data));
	}, []);
	//

	return (
		<Router>
			<div>
				<div className="container">
					<Header />
					<Route exact path="/" component={Index2} />
					<Route path="/about" component={About} />
				</div>
			</div>
		</Router>
	);
};

export default App;
