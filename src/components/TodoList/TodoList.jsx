import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

TodoList.propTypes = {
	todoList: PropTypes.array,
	onTodoClick: PropTypes.func,
	removeTodo: PropTypes.func,
};

TodoList.defaultPropTypes = {
	todoList: [],
	onTodoClick: null,
	removeTodo: null,
};

function TodoList({ todoList, onTodoClick, removeTodo }) {
	const handleTodoClick = (todo, idx) => {
		if (!onTodoClick) return;

		onTodoClick(todo, idx);
	};
	const removeTodoClick = (todo) => {
		if (!removeTodo) return;

		removeTodo(todo);
	};

	return (
		<ul className="todo-list">
			{todoList.map((todo) => (
				<TodoItem todo={todo} handleTodoClick={handleTodoClick} removeTodoClick={removeTodoClick} key={todo.id} />
			))}
		</ul>
	);
}

export default TodoList;
