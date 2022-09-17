import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Data } from "./data/data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Data>
    <App />
  </Data>
);
