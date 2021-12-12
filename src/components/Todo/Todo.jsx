import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './Todo.module.css';

Todo.propTypes = {};

function Todo(props) {
	const [todoList, setTodoList] = useState([
		{
			id: 1,
			text: 'Sleep',
			status: 'new',
		},
		{
			id: 2,
			text: 'Study',
			status: 'completed',
		},
		{
			id: 3,
			text: 'Break',
			status: 'new',
		},
	]);

	const [filterStatus, setFilterStatus] = useState('all');

	const handleTodoClick = (todo) => {
		console.log(todo);
		const newTodoList = [...todoList];

		const currentTodo = newTodoList.find((x) => x.id == todo.id);

		currentTodo.status = currentTodo.status === 'new' ? 'completed' : 'new';
		setTodoList(newTodoList);
	};

	const removeTodo = (todo) => {
		const removeItem = todoList.filter((x) => x.id !== todo.id);

		setTodoList(removeItem);
	};

	const handleShowAll = () => {
		setFilterStatus('all');
	};

	const handleShowNew = () => {
		setFilterStatus('new');
	};

	const handleShowCompleted = () => {
		setFilterStatus('completed');
	};

	const renderTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);

	const handleFormSubmit = (input) => {
		const newTodo = {
			id: Math.floor(Math.random() * 100),
			...input,
		};
		const newTodoList = [...todoList];
		newTodoList.push(newTodo);
		setTodoList(newTodoList);
	};

	return (
		<div className={styles['todo']}>
			<h1>Todo List</h1>
			<TodoForm onSubmit={handleFormSubmit} />
			<div className={styles['button-show']}>
				<button onClick={handleShowAll} className={styles['btn']}>
					All{' '}
				</button>
				<button onClick={handleShowNew} className={styles['btn']}>
					New{' '}
				</button>
				<button onClick={handleShowCompleted} className={styles['btn']}>
					Completed{' '}
				</button>
			</div>
			<TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} removeTodo={removeTodo} />
		</div>
	);
}

export default Todo;
