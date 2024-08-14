import React, { useEffect, useState } from "react";
import { getSelectedPrice } from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const selectedPrice = useSelector((state) => state.filter.selectedPrice);

  const handlePriceChange = (e) => {
    const newPrice = Number(e.target.value);
    dispatch(getSelectedPrice(newPrice));
  };

  return (
    <section>
      <h5>Price</h5>
      <input
        onChange={handlePriceChange}
        type="range"
        className="form-range"
        min="1000"
        max="2000"
        step="100"
        id="price"
        value={selectedPrice || 1000}
      />
    </section>
  );
};

export default PriceFilter;
