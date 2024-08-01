import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";

const ProductsListing = () => {
  const [price, setPrice] = useState(1000);
  const paramsObject = useParams();
  const [category, setCategory] = useState([paramsObject.category]);
  const [ratings, setRatings] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");

  // console.log(paramsObject.category)

  const { data, loading, error } = useFetch(
    `https://362c5c61-ae89-49bf-ae04-a6dd7351bae7-00-1ky1s3geviatc.sisko.replit.dev:3002/products`,
  );

  // console.log(data.products);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    // console.log(event.target.value)
  };

  const handleCategoryChange = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setCategory((prevValue) => [...prevValue, value]);
    } else {
      setCategory((prevValue) => prevValue.filter((val) => val !== value));
    }
  };

  const handleRatingChange = (event) => {
    setRatings(event.target.value);
    console.log(event.target.value);
  };

  const handleSortByPrice = (event) => {
    setSortByPrice(event.target.value);
  };

  const handleClearFilter = () => {
    setPrice(1000);
    setCategory([]);
    setRatings("");
    setSortByPrice("");
  };

  const filterProducts = data?.products?.filter((product) => {
    const priceFilter = product.productPrice <= Number(price);
    const categoryFilter = category.length
      ? category.includes(product.category)
      : true;
    const ratingFilter = product.productRating >= Number(ratings);
    return priceFilter && ratingFilter && categoryFilter;
  });

  const sortedProducts =
    sortByPrice === "Low to High"
      ? filterProducts?.sort((a, b) => a.productPrice - b.productPrice)
      : sortByPrice === "High to Low"
        ? filterProducts?.sort((a, b) => b.productPrice - a.productPrice)
        : filterProducts;

  return (
    <div>
      <Header />
      <div className="row">
        {/* Filter section */}
        <section className="col-md-4 border">
          <p>Filter section</p>
          <div className="d-flex justify-content-between mb-3">
            <h5>Filters</h5>{" "}
            <button onClick={handleClearFilter} className="border-0">
              Clear Filter
            </button>
          </div>

          <div>
            <h5>
              <label htmlFor="price">Price</label>
            </h5>
            <div className="d-flex justify-content-between">
              <span>1000</span> <span>1500</span> <span>2000</span>
            </div>

            <input
              onChange={handlePriceChange}
              type="range"
              className="form-range"
              min="1000"
              max="2000"
              step="500"
              id="price"
              value={price}
            />
          </div>

          <div>
            <h5>Category</h5>
            <label className="form-check-label">
              <input
                onChange={handleCategoryChange}
                className="form-check-input"
                type="checkbox"
                value="Men"
                checked={category.includes("Men")}
              />
              Men Clothing
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                onChange={handleCategoryChange}
                className="form-check-input"
                type="checkbox"
                value="Women"
                checked={category.includes("Women")}
              />
              Women Clothing
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                onChange={handleCategoryChange}
                className="form-check-input"
                type="checkbox"
                value="Kids"
                checked={category.includes("Kids")}
              />
              Kids Clothing
            </label>{" "}
            <br />
          </div>

          <div>
            <h5>Rating</h5>
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ratings"
                value="4"
                onChange={handleRatingChange}
                checked={ratings === "4"}
              />{" "}
              4 Stars & above
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ratings"
                value="3"
                onChange={handleRatingChange}
                checked={ratings === "3"}
              />{" "}
              3 Stars & above
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ratings"
                value="2"
                onChange={handleRatingChange}
                checked={ratings === "2"}
              />{" "}
              2 Stars & above
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="radio"
                name="ratings"
                value="1"
                onChange={handleRatingChange}
                checked={ratings === "1"}
              />{" "}
              1 Stars & above
            </label>{" "}
            <br />
          </div>

          <div>
            <h5>Sort by</h5>
            <label className="form-check-label">
              <input
                onChange={handleSortByPrice}
                className="form-check-input"
                type="radio"
                name="price"
                value="Low to High"
                checked={sortByPrice === "Low to High"}
              />
              Price - Low to High
            </label>{" "}
            <br />
            <label className="form-check-label">
              <input
                onChange={handleSortByPrice}
                className="form-check-input"
                type="radio"
                name="price"
                value="High to Low"
                checked={sortByPrice === "High to Low"}
              />
              Price - High to Low
            </label>{" "}
            <br />
          </div>
        </section>

        {/* Products Section */}
        <section className="col-md border">
          <p>Products section</p>
          <div className="row">
            {sortedProducts &&
              sortedProducts.map((product) => (
                <div key={product._id} className="col-md-4">
                  <CardComponent product={product} />
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsListing;
