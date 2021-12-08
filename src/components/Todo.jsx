import React, { useState } from "react";
import TodoForm from "./Todo/TodoForm";
import TodoList from "./Todo/TodoList";

Todo.propTypes = {};

function Todo(props) {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: "Sleep",
      status: "new",
    },
    {
      id: 2,
      text: "Study",
      status: "completed",
    },
    {
      id: 3,
      text: "Break",
      status: "new",
    },
  ]);

  const [filterStatus, setFilterStatus] = useState("all");

  const handleTodoClick = (todo, idx) => {
    console.log(todo);
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    setTodoList(newTodoList);
  };

  const removeTodo = (todo) => {
    const removeItem = todoList.filter((x) => x.id !== todo.id);

    setTodoList(removeItem);
  };

  const handleShowAll = () => {
    setFilterStatus("all");
  };

  const handleShowNew = () => {
    setFilterStatus("new");
  };

  const handleShowCompleted = () => {
    setFilterStatus("completed");
  };

  const renderTodoList = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );

  const handleFormSubmit = (input) => {
    console.log(input);

    const newTodo = {
      id: Math.floor(Math.random() * 100),
      ...input,
    };

    const newTodoList = [...todoList];

    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  };

  return (
    <div className="todo">
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleFormSubmit} />
      <div className="button-show">
        <button onClick={handleShowAll} className="btn">
          All{" "}
        </button>
        <button onClick={handleShowNew} className="btn">
          New{" "}
        </button>
        <button onClick={handleShowCompleted} className="btn">
          Completed{" "}
        </button>
      </div>
      <TodoList
        todoList={renderTodoList}
        onTodoClick={handleTodoClick}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default Todo;
