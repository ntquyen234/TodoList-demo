import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoForm.module.css';

console.log(styles);

TodoForm.propTypes = {
	onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
	onSubmit: null,
};

function TodoForm({ onSubmit }) {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!onSubmit) return;

		onSubmit({
			id: Math.floor(Math.random() * 100),
			text: input,
		});

		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="Add new Todo" value={input} onChange={handleChange} className={styles['input-submit']} />
			<button className={styles['button-submit']}>Add</button>
		</form>
	);
}

export default TodoForm;
