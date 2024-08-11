import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import ProductsListing from "./pages/ProductsListing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products/:category",
    element: <ProductsListing />,
  },
  {
    path: "/productDetails/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
