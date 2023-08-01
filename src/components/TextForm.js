import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success")
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "light",
              color: props.mode ==='dark'? 'white':'#042743'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-2  mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary my-2  mx-2" onClick={handleCopy}>
          Copy to clipboard
        </button>
        <button
          className="btn btn-primary my-2  mx-2"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div className="container my-3" style = {{color: props.mode==='dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{text.split(" ").length * 0.008} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text: "Enter some text in the textbox above to preview..."}</p>
      </div>
    </>
  );
}
