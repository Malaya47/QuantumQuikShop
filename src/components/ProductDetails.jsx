import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(fetchProductDetails(paramsObject.id));
  }, []);

  return (
    <section>
      <ToastContainer theme="dark" autoClose={1000} />

      <Header />
      <section className="mt-5 pt-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="mb-3 d-flex justify-content-center">
                <img
                  className=""
                  src={product.productImageURL}
                  alt={product.productName}
                />
              </div>
              {/* Multiple product images Div */}
              {/* <div className="d-flex justify-content-center mb-3">
                {[
                  "big1.webp",
                  "big2.webp",
                  "big3.webp",
                  "big4.webp",
                  "big.webp",
                ].map((img, index) => (
                  <a
                    key={index}
                    data-fslightbox="mygalley"
                    className="border mx-1 rounded-2 item-thumb"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-type="image"
                    href={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}`}
                  >
                    <img
                      width="60"
                      height="60"
                      className="rounded-2"
                      src={`https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/${img}`}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </a>
                ))}
              </div> */}
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="text-dark lato-bold fs-3">
                  {product.productName}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <span className="ms-1">
                      {" "}
                      {product.productRating && (
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
                  <span className="h5">&#8377; {product.productPrice}</span>
                </div>

                <p className="lato-regular">
                  Step into a world of timeless elegance and modern
                  sophistication with our latest collection. Designed for those
                  who appreciate both form and function, our range offers a
                  diverse selection of products that cater to a variety of
                  tastes and occasions. Each item in this collection is a
                  testament to our commitment to quality and style, meticulously
                  crafted from premium materials that ensure longevity and
                  comfort.
                </p>

                <p className="lato-regular">
                  Our collection is inspired by the latest trends, yet remains
                  rooted in classic design principles, making it versatile
                  enough to complement any wardrobe. From everyday essentials
                  that provide effortless comfort to standout pieces that make a
                  bold statement, every item is thoughtfully designed to enhance
                  your lifestyle. Whether you're dressing for a casual day out,
                  a formal event, or anything in between, our products offer the
                  perfect balance of style and practicality.
                </p>

                {/* <div className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div> */}

                <hr />

                {/* <div className="row mb-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: "35px" }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div
                      className="input-group mb-3"
                      style={{ width: "170px" }}
                    >
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder="14"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div> */}
                <button
                  onClick={() => handleAddToWishlist(product)}
                  className="btn btn-lg btn-outline-dark shadow-0 me-3"
                >
                  {" "}
                  <i className="bi bi-heart-fill"></i> Add to wishlist{" "}
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="btn btn-lg btn-outline-dark shadow-0"
                >
                  <i className="bi bi-cart"> Add to cart</i>
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProductDetails;
