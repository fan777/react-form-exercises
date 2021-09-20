import { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm.js'
import "./TodoList.css"

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    let newTodo = { ...todo, id: uuid() };
    setTodos(todos => [...todos, newTodo]);
  }

  const renderTodos = () => {
    return (
      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.todoText}
            </li>
          ))
        }
      </ul>
    )
  }

  return (
    <div className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </div>
  )
}

export default TodoList;