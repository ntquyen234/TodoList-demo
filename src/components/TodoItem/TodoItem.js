import classNames from 'classnames';
import React, { useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

import styles from './TodoItem.module.css';

const TodoItem = ({ todo, handleTodoClick, removeTodoClick }) => {
	return (
		<li className={styles['todo-item']}>
			<div
				key={todo.id}
				className={classNames({
					[styles['todo-text']]: true,
					[styles['completed']]: todo.status === 'completed',
				})}
				onClick={() => {
					handleTodoClick(todo);
				}}
			>
				{todo.text}
			</div>
			<div className="icons">
				<RiDeleteBinLine onClick={() => removeTodoClick(todo)} className={styles['delete-icon']} />
			</div>
		</li>
	);
};

export default TodoItem;
