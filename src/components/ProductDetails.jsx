import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchProductDetails,
  addToWishlist,
  addToCart,
} from "../features/filterSlice";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import ServiceSection from "./ServiceSection";
import Footer from "./Footer";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const paramsObject = useParams();
  // console.log(paramsObject.id);

  const product = useSelector((state) => state.filter.productDetail);
  // console.log(product);

  const handleAddToWishlist = (product) => {
    // dispatch action to add it in wishlist array
    dispatch(addToWishlist(product));
    toast.success("Product added to wishlist");
  };

  const handleAddToCart = (product) => {
    // dispatch action to add it in cart array
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
  };

  const ReviewFormSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  useEffect(() => {
    dispatch(fetchProductDetails(paramsObject.id));
  }, []);

  return (
    <section>
      <ToastContainer theme="dark" autoClose={1000} />

      <Header />
      <section className="mt-5 pt-5">
        <div className="mx-3">
          <div className="row">
            <aside className="col-lg-5 col-xs-6">
              <div className="mb-3 d-flex justify-content-center">
                <img
                  className="img-fluid"
                  src={product?.productImageURL}
                  alt={product?.productName}
                />
              </div>
            </aside>
            <main className="col-lg-6 col-xs-6">
              <div className="">
                <h4 className="text-dark lato-bold fs-3">
                  {product?.productName}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <span className="ms-1">
                      {" "}
                      {product?.productRating && (
                        <span>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star-fill"></i>
                          <i class="bi bi-star"></i>
                        </span>
                      )}{" "}
                    </span>
                  </div>
                  <span className="text-muted">154 orders</span>
                  <span className="text-success ms-2">In stock</span>
                </div>

                <div className="mb-3">
                  <span className="h5">&#8377; {product?.productPrice}</span>
                </div>

                <p className="lato-light">
                  Step into a world of timeless elegance and modern
                  sophistication with our latest collection. Designed for those
                  who appreciate both form and function, our range offers a
                  diverse selection of products that cater to a variety of
                  tastes and occasions. Each item in this collection is a
                  testament to our commitment to quality and style, meticulously
                  crafted from premium materials that ensure longevity and
                  comfort.
                </p>

                <p className="lato-light">
                  Our collection is inspired by the latest trends, yet remains
                  rooted in classic design principles, making it versatile
                  enough to complement any wardrobe. From everyday essentials
                  that provide effortless comfort to standout pieces that make a
                  bold statement, every item is thoughtfully designed to enhance
                  your lifestyle. Whether you're dressing for a casual day out,
                  a formal event, or anything in between, our products offer the
                  perfect balance of style and practicality.
                </p>
                <div className="row justify-content-start mt-4">
                  <div className="col-auto">
                    <button
                      onClick={() => handleAddToWishlist(product)}
                      className="btn btn-lg btn-outline-dark shadow-0"
                    >
                      <i className="bi bi-heart-fill"></i> Add to wishlist
                    </button>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn btn-lg btn-outline-dark shadow-0"
                    >
                      <i className="bi bi-cart"> Add to cart</i>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <ServiceSection />
      <Footer />
    </section>
  );
};

export default ProductDetails;
