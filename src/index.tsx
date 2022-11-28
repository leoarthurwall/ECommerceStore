import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ShoppingBagProvider } from "./Context/ShoppingBagContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <ShoppingBagProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </ShoppingBagProvider>
  </React.StrictMode>
);
