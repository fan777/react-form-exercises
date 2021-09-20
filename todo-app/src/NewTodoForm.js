import { useState } from "react";
import "./NewTodoForm.css"

const NewTodoForm = ({ addTodo }) => {
  const initialState = { todoText: "" }
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="todoText"
        type="text"
        name="todoText"
        placeholder="What should I do?"
        value={formData.todoText}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  )
}

export default NewTodoForm;