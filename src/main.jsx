import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import ItemDetail from "./components/ItemDetail";
import Menu from "./components/Menu";
import menuItems from "./data/menuItems";
import "./index.css";

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Menu items={menuItems}/>} />
      <Route path="/item/:id" element={<ItemDetail />} />
    </Route>
  ))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
