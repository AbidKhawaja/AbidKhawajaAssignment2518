import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

function MyFirstComponent() {
  const Sum = () => {
    var first = parseInt(document.getElementById("firstNumber").value);
    var second = parseInt(document.getElementById("secondNumber").value);
    var sum = first + second;
    alert("The sum is: " + sum);
  };

  const [text, setText] = useState("");
  const handleDisplay = (event) => {
    event.preventDefault();
    setText(event.target[0].value);
  };

  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fs-2" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/Spotify_App_Logo.svg"
              alt=""
              width="40"
              height="40"
              class="d-inline-block align-text-top"
            />
            Spotify
          </a>
        </div>
      </nav>
      <div class="container py-3">
        <div class="row">
          <div class="col-sm-3">
            <img
              src="https://i.ytimg.com/an/x69etlhievQ/8133645264963479382_mq.jpg?v=6132ba11"
              class="img-thumbnail"
              alt=""
            />
          </div>
          <div class="col-sm-4 py-3">
            <h2>Abid Khawaja</h2>
            <div class="sm-3">
              <form onSubmit={handleDisplay}>
                <textarea type="text" class="form-control" rows="4"></textarea>
                <div>
                  <button type="display">display</button>
                </div>
              </form>
              <h1>{text}</h1>
            </div>
          </div>
        </div>
        Enter first number:
        <input type="text" id="firstNumber" />
        <br /> Enter second number:
        <input type="text" id="secondNumber" />
        <br />
        <button onClick={Sum}>Add</button>
      </div>
    </div>
  );
}
ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));
