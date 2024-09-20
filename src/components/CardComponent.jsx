import { Link } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  postProductInCart,
  postProductInWishlist,
  gotoCartToggle,
} from "../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const CardComponent = ({ finalProductsToView }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const gotoCart = useSelector((state) => state.filter.gotoCart);

  useEffect(() => {
    if (finalProductsToView.length > 0) {
      setLoading(false);
    }
  }, [finalProductsToView]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(postProductInCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
    dispatch(gotoCartToggle({ [product._id]: true }));
  };

  const handleAddToWishlist = (product) => {
    dispatch(addToWishlist(product));
    dispatch(postProductInWishlist(product));
    toast.success("Product added to wishlist");
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <div className="">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4 px-1">
          {loading
            ? Array(4)
                .fill(null)
                .map((_, index) => (
                  <div key={index} className="col-md-6 col-lg-4">
                    <div className="card h-100 border-0 shadow">
                      <div
                        className="card-img-top placeholder-glow"
                        style={{ height: "340px", objectFit: "cover" }}
                      >
                        <span className="placeholder col-12 bg-dark"></span>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                          <span className="placeholder col-7 bg-dark"></span>
                        </h5>

                        <p className="card-text placeholder-glow">
                          <span className="placeholder col-4 bg-dark"></span>
                        </p>

                        <span
                          className="btn btn-dark w-100 placeholder"
                          disabled
                        ></span>
                        <span
                          className="btn btn-outline-dark w-100 mt-1 placeholder"
                          disabled
                        ></span>
                      </div>
                    </div>
                  </div>
                ))
            : finalProductsToView.map((product) => (
                <div key={product._id} className="col-md-6 col-lg-4">
                  <div className="card h-100 border-0 shadow">
                    <Link to={`/productDetails/${product._id}`}>
                      <img
                        src={product.productImageURL}
                        className="card-img-top rounded-top"
                        alt="Nike Airmax v2"
                        style={{ height: "340px", objectFit: "cover" }}
                      />
                    </Link>

                    <div className="card-body">
                      <h5 className="card-title">
                        <Link
                          to={`/productDetails/${product._id}`}
                          className="card-title"
                          style={{ textDecoration: "none" }}
                        >
                          {product.productName}
                        </Link>
                      </h5>

                      <p className="card-text">
                        &#8377; {product.productPrice}
                      </p>

                      {gotoCart[product._id] ? (
                        <Link className="btn btn-outline-dark me-2" to="/cart">
                          <i className="bi bi-cart"> Go to Cart</i>
                        </Link>
                      ) : (
                        <Link
                          onClick={() => handleAddToCart(product)}
                          type="button"
                          className="btn btn-outline-dark me-2"
                        >
                          <i className="bi bi-cart"> Add to Cart</i>
                        </Link>
                      )}

                      <button
                        onClick={() => handleAddToWishlist(product)}
                        type="button"
                        className="btn btn-outline-dark"
                      >
                        <i className="bi bi-heart-fill"> Add to Wishlist</i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default CardComponent;
