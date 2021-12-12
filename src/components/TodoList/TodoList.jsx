import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
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
	const removeTodoClick = (todo, idx) => {
		if (!removeTodo) return;

		removeTodo(todo, idx);
	};

	return (
		<ul className="todo-list">
			{todoList.map((todo, idx) => (
				<li className={styles['todo-item']}>
					<div
						key={todo.id}
						className={classNames({
							[styles['todo-text']]: true,
							[styles['completed']]: todo.status === 'completed',
						})}
						onClick={() => handleTodoClick(todo, idx)}
					>
						{todo.text}
					</div>
					<div className="icons">
						<RiDeleteBinLine onClick={() => removeTodoClick(todo, idx)} className={styles['delete-icon']} />
					</div>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
