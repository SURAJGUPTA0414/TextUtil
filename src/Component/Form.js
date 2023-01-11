import { useState } from "react";

export default function Form(props) {
  const [Text, setText] = useState("Enter text here");
  
  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = Text.toLowerCase();
    setText(newText);
  }

  const handleChange = (e) => {
    console.log("handleChange was clicked"+Text);
    setText(e.target.value)
  }
  return (
    <div className="container my-3">
      <h1>
        {props.heading}
      </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="text"
          rows="8"
          placeholder="type here"
          value={Text}
          onChange={handleChange}
        ></textarea>
        
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Conver to Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Conver to LowerCase</button>
    </div>
  );
}
