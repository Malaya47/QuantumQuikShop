import React from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";
import { useSelector } from "react-redux";

const FilterSection = ({ urlParam }) => {
  const handleClearFilter = () => {};
  return (
    <div>
      <h5>Filters</h5> <span>Clear</span>
      <PriceFilter />
      <CategoryFilter urlParam={urlParam} />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;
