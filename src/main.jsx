import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Checkout from "./components/Checkout";
import ItemDetail from "./components/ItemDetail";
import Menu from "./components/Menu";
import { CartProvider } from "./context/CartContext";
import menuItems from "./data/menuItems";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<CartProviderLayout />}>
      <Route element={<App />}>
        <Route path="/" element={<Menu items={menuItems} />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Route>
  )
);

function CartProviderLayout() {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
