import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <Demo />
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
