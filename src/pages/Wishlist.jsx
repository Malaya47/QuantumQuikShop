import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromWishList } from "../features/filterSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.filter.wishlist);

  const handleAddToCart = (product) => {
    // dispatch action to add it in cart array
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <>
      <h2 className="text-center">My Wishlist</h2>

      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {wishlist.map((product) => (
            <div key={product._id} className="col">
              <div className="card h-100 border-0 shadow-sm">
                <Link to={`/productDetails/${product._id}`}>
                  <img
                    src="https://m.media-amazon.com/images/I/61j2FBMg2LL._AC_UL320_.jpg"
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

                  <p className="card-text">&#8377; {product.productPrice}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    type="button"
                    className="btn btn-dark w-100"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(product._id)}
                    type="button"
                    className="btn btn-dark w-100 mt-1"
                  >
                    Remove from Wishlist
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

export default Wishlist;
