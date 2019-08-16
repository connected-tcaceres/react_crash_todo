import React from 'react';
import AddTodo from '../AddTodo';
import Todos from '../Todos';

const Index = (props) => {
	return (
		<div>
			<>
				<AddTodo addTodo={props.addTodo} />
				<Todos
					toggleComplete={props.toggleComplete}
					deleteTodo={props.deleteTodo}
					todos={props.todos}
				/>
			</>
		</div>
	);
};

export default Index;
