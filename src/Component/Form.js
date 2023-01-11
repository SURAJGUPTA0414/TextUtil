import { useState } from "react";

export default function Form(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () => {
    console.log("uppercase was clicked");
    let newText = Text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked");
    let newText = Text.toLowerCase();
    setText(newText);
  };

  const handlClearClick = () => {
    console.log("clear was clicked");
    let newText = "";
    setText(newText);
  };

  const handlEmailClick = () => {
    console.log("Email extractor was clicked");
    let text = Text;
    var regex = /<(.*)>/g; // The actual regex
    var matches = regex.exec(text);
    setText(matches[1]);
  };

  const handleChange = (e) => {
    console.log("handleChange was clicked" + Text);
    setText(e.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text"
            rows="8"
            value={Text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Conver to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>
          Conver to LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handlClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handlEmailClick}>
          Extract Email{" "}
        </button>
      </div>
      <div className="container">
        <h2>Your Summary:</h2>
        <p>
          You have total {Text.split(" ").length} word and {Text.length}{" "}
          characters
        </p>
        <h2>Preveiw:</h2>
        <p>{Text}</p>
        <p>Time take to read this {0.008 * Text.split(" ").length} Minutes</p>
        <p>Email Extracted from the texts: {Text}</p>
      </div>
    </>
  );
}
