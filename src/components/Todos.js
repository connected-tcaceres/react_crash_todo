import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const Todos = (props) => {
	const todoList = props.todos.map((todo) => {
		return (
			<TodoItem
				key={todo.id}
				todo={todo}
				toggleComplete={props.toggleComplete}
				deleteTodo={props.deleteTodo}
			/>
		);
	});
	return <div>{todoList}</div>;
};

// PropTypes
Todos.propTypes = {
	deleteTodo: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired,
	toggleComplete: PropTypes.func.isRequired
};

export default Todos;
