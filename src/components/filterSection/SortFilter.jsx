import React from "react";

const SortFilter = () => {
  const handleSortByPrice = () => {};
  return (
    <section>
      <h5>Sort by</h5>
      <label className="form-check-label">
        <input
          // onChange={handleSortByPrice}
          className="form-check-input"
          type="radio"
          name="price"
          value="Low to High"
          // checked={sortByPrice === "Low to High"}
        />
        Price - Low to High
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          // onChange={handleSortByPrice}
          className="form-check-input"
          type="radio"
          name="price"
          value="High to Low"
          // checked={sortByPrice === "High to Low"}
        />
        Price - High to Low
      </label>{" "}
      <br />
    </section>
  );
};

export default SortFilter;
