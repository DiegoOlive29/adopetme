import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import Providers from "./Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Providers>
      <App />
    </Providers>
  </BrowserRouter>
);
