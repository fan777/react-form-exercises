import "./Box.css";

const Box = ({ id, width, height, color }) => {
  const style = {
    "width": `${width}px`,
    "height": `${height}px`,
    backgroundColor: color
  }
  return (
    <div key={id} className="Box" style={style}>
      {/* <button onClick={handleRemove}>X</button> */}
    </div >
  )
}

export default Box;