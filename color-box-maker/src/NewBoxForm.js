import { useState } from "react";

const NewBoxForm = () => {
  const initialState = {
    width: "",
    height: "",
    color: ""
  }
  const [formData, setFormData] = useState(initialState)
  const handleChange = e => {
    const { name, value } = e.target
    setFormData(data => ({
      ...data,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const { width, height, color } = formData;
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        id="width"
        type="text"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange} />

      <label htmlFor="height">Height</label>
      <input
        id="height"
        type="text"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange} />

      <label htmlFor="color">Color</label>
      <input
        id="color"
        type="color"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange} />

      <button>Create a Box</button>
    </form>
  )
}

export default NewBoxForm;