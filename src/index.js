import React from "react";
import ReactDOM from "react-dom";
// Styles
import "./index.css";
// Main
import App from "./App";
// Context
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);
