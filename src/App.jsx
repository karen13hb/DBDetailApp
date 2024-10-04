import React from "react";
import ReactDOM from "react-dom/client";
import Detalle from "./components/Detalle";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <>
  <BrowserRouter>
  <Detalle/>
  </BrowserRouter>
 </>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)