import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AddToCartProvider } from "./context/AddToCartContext.js";
import { MainShopProvider } from "./context/MainShopContext.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AddToCartProvider>
      <MainShopProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MainShopProvider>
    </AddToCartProvider>
  </React.StrictMode>
);
