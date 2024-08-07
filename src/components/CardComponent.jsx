import { Link } from "react-router-dom";
import { addToCart } from "../features/filterSlice";
import { useDispatch } from "react-redux";

const CardComponent = ({ finalProductsToView }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // dispatch action to add it in cart array
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {finalProductsToView.map((product) => (
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
                  <button type="button" className="btn btn-dark w-100 mt-1">
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
