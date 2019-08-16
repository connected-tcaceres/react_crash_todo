import React, {useState} from 'react';
import './addTodo.scss';

const AddTodo = (props) => {
	const [addTodoItem, setAddTodoItem] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		props.addTodo(addTodoItem);
		setAddTodoItem('');
	};

	return (
		<form className="todo-form" onSubmit={onSubmit}>
			<input
				className="todo-form__input-field"
				type="text"
				name="title"
				placeholder="Add Todo..."
				value={addTodoItem}
				onChange={(e) => setAddTodoItem(e.target.value)}
			/>
			<button className="todo-form__btn">Submit</button>
		</form>
	);
};

export default AddTodo;
