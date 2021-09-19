import { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    width: "",
    height: "",
    color: "#000000"
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
    // const { width, height, color } = formData;
    addBox({ ...formData });
    setFormData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width (px)</label>
      <br />
      <input
        id="width"
        type="number"
        name="width"
        placeholder="width"
        value={formData.width}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="height">Height (px)</label>
      <br />
      <input
        id="height"
        type="number"
        name="height"
        placeholder="height"
        value={formData.height}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="color">Color</label>
      <br />
      <input
        id="color"
        type="color"
        name="color"
        placeholder="color"
        value={formData.color}
        onChange={handleChange}
      />
      <button>Create Box</button>
    </form>
  )
}

export default NewBoxForm;