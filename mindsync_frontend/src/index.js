import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <a href="#main" className="skip-link">Skip to content</a>
    <App />
  </React.StrictMode>
);
