import React from "react";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import RatingFilter from "./RatingFilter";
import SortFilter from "./SortFilter";

const FilterSection = () => {
  const handleClearFilter = () => {};
  return (
    <div>
      <h5>Filters</h5> <span>Clear</span>
      <PriceFilter />
      <CategoryFilter />
      <RatingFilter />
      <SortFilter />
    </div>
  );
};

export default FilterSection;
