import { Link } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  postProductInCart,
  postProductInWishlist,
} from "../features/filterSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const CardComponent = ({ finalProductsToView }) => {
  const [disabledButtons, setDisabledButtons] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // dispatch action to add it in cart array
    dispatch(addToCart({ ...product, quantity: 1 }));
    dispatch(postProductInCart({ ...product, quantity: 1 }));
    toast.success("Product added to cart");
    setDisabledButtons((prevState) => ({
      ...prevState,
      [product._id]: true,
    }));
  };

  const handleAddToWishlist = (product) => {
    // dispatch action to add it in wishlist array
    dispatch(addToWishlist(product));
    dispatch(postProductInWishlist(product));
    toast.success("Product added to wishlist");
  };

  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <div className="container py-5 mt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ">
          {finalProductsToView.map((product) => (
            <div key={product._id} className="col">
              <div className="card h-100 border-0 shadow">
                <Link to={`/productDetails/${product._id}`}>
                  <img
                    src={product.productImageURL}
                    className="card-img-top rounded-top"
                    alt="Nike Airmax v2"
                    style={{ height: "340px", objectFit: "cover" }}
                    onClick={() => handleAddToWishlist(product)}
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

                  <p className="card-text">&#8377; {product.productPrice}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    type="button"
                    className="btn btn-dark w-100"
                    disabled={disabledButtons[product._id] || false}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    type="button"
                    className="btn btn-outline-dark w-100 mt-1"
                  >
                    Add to Wishlist
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
