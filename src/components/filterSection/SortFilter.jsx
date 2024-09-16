import React, { useEffect, useState } from "react";
import { getSelectedSort } from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const SortFilter = () => {
  const dispatch = useDispatch();
  const selectedSort = useSelector((state) => state.filter.selectedSort);

  const handleSortByPrice = (e) => {
    dispatch(getSelectedSort(e.target.value));
  };

  return (
    <section>
      <h5>Sort by</h5>
      <label className="form-check-label">
        <input
          onChange={handleSortByPrice}
          className="form-check-input me-1"
          type="radio"
          name="price"
          value="Low to High"
          checked={selectedSort === "Low to High"}
        />
        Price - Low to High
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          onChange={handleSortByPrice}
          className="form-check-input me-1"
          type="radio"
          name="price"
          value="High to Low"
          checked={selectedSort === "High to Low"}
        />
        Price - High to Low
      </label>{" "}
      <br />
    </section>
  );
};

export default SortFilter;
