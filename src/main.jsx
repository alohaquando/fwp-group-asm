import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Data } from "./data/data";

// Run this project
// // npm install
// // npm start

// Front-end at port 5173 (default)
// API server at port 3000

ReactDOM.createRoot(document.getElementById("root")).render(
  <Data>
    <App />
  </Data>
);
