import React, { useEffect } from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter } from "../../features/filterSlice";

const FilterSection = ({ urlParam }) => {
  const dispatch = useDispatch();

  const handleClearFilter = () => {
    dispatch(
      clearFilter({
        selectedPrice: 2000,
        selectedRating: null,
        selectedSort: null,
      })
    );
  };

  return (
    <div className="mt-5 bg-body-tertiary rounded px-3 py-3">
      <div className="d-flex justify-content-between">
        <h5>Filters</h5>{" "}
        <span className="btn btn-dark btn-sm" onClick={handleClearFilter}>
          Clear
        </span>
      </div>
      <PriceFilter />
      <CategoryFilter urlParam={urlParam} />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;
