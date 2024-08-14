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
        selectedPrice: null,
        selectedRating: null,
        selectedSort: null,
      })
    );
  };

  return (
    <div className="filterContainer ps-3">
      <h5>Filters</h5>{" "}
      <span className="btn btn-dark btn-sm" onClick={handleClearFilter}>
        Clear
      </span>
      <PriceFilter />
      <CategoryFilter urlParam={urlParam} />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;
