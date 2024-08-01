import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { useParams } from "react-router-dom";
import { useState } from "react";
import FilterSection from "../components/filterSection/FilterSection";

const ProductsListing = () => {
  const paramsObject = useParams();
  console.log(paramsObject.category);

  return (
    <div>
      <Header />
      <section className="row">
        {/* This is for filter section */}
        <section className="col-md-3">
          <FilterSection />
        </section>

        {/* This section is for product listing  */}
        <section className="col-md-9"></section>
      </section>
    </div>
  );
};

export default ProductsListing;
