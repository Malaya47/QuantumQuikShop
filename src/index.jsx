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
import Login from "./pages/Login";
import ScrollToTopWrapper from "./components/ScrollToTopWrapper";
import SignUp from "./pages/SignUp";
import OrderSummary from "./pages/OrderSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTopWrapper>
        <App />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/products/:category",
    element: (
      <ScrollToTopWrapper>
        <ProductsListing />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/productDetails/:id",
    element: (
      <ScrollToTopWrapper>
        <ProductDetails />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/cart",
    element: (
      <ScrollToTopWrapper>
        <Cart />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ScrollToTopWrapper>
        <Wishlist />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/login",
    element: (
      <ScrollToTopWrapper>
        <Login />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/signup",
    element: (
      <ScrollToTopWrapper>
        <SignUp />
      </ScrollToTopWrapper>
    ),
  },
  {
    path: "/orderSummary",
    element: (
      <ScrollToTopWrapper>
        <OrderSummary />
      </ScrollToTopWrapper>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
