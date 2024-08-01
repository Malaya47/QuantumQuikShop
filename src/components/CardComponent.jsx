const CardComponent = ({product}) => {
  return (
    <div className="card" style={{ width: "18rem", position: "relative" }}>
      <img
        src="https://images.pexels.com/photos/826380/pexels-photo-826380.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text text-center">{product.productName}</p>
        <p className="card-text text-center"> RS.{product.productPrice}</p>
        <p className="card-text text-center">Rating: {product.productRating}</p>
        <div className="mb-2">
          <button href="#" className="btn btn-primary w-100">
            Add to Cart
          </button>
        </div>
        <div>
          <button href="#" className="btn btn-primary w-100">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
