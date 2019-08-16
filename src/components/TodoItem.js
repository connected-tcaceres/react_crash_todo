import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.scss';
import classnames from 'classnames';

const TodoItem = (props) => {
	const divClass = classnames('todo-item', {
		'todo-item--completed': props.todo.completed
	});

	return (
		<div className={divClass}>
			<p>
				<input
					type="checkbox"
					onChange={() => props.toggleComplete(props.todo.id)}
				/>
				{props.todo.title}
				<button
					className="todo-item__delete-button"
					onClick={() => props.deleteTodo(props.todo.id)}>
					x
				</button>
			</p>
		</div>
	);
};

// PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
