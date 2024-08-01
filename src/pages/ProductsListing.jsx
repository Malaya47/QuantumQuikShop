import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductsListing = () => {
  const paramsObject = useParams();
  console.log(paramsObject.category);

  const handlePriceChange = () => {};

  const handleCategoryChange = () => {};

  const handleRatingChange = () => {};

  const handleSortByPrice = () => {};

  const handleClearFilter = () => {};

  return (
    <div>
      <Header />
    </div>
  );
};

export default ProductsListing;
