import React from "react";

const PriceFilter = () => {
  const handlePriceChange = () => {};
  return (
    <section>
      <h5>Price</h5>
      <input
        // onChange={}
        type="range"
        className="form-range"
        min="1000"
        max="2000"
        step="100"
        id="price"
        // value={price}
      />
    </section>
  );
};

export default PriceFilter;
