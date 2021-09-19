import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box.js";
import NewBoxForm from "./NewBoxForm.js";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
  }
  return (
    <>
      <NewBoxForm addBox={addBox} />
      <div className="BoxList">
        {boxes.map(({ id, width, height, color }) => (
          <Box key={id} width={width} height={height} color={color} />
        ))}
      </div>
    </>
  )
}

export default BoxList;