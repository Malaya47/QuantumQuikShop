import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSection from "../components/filterSection/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/filterSlice";

const ProductsListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.filter.products.products);
  const paramsObject = useParams();
  // console.log(paramsObject.category);

  useEffect(() => {
    dispatch(fetchProducts(paramsObject.category));
  }, []);

  // console.log(products);
  return (
    <div>
      <Header />
      <section className="row">
        {/* This is for filter section */}
        <section className="col-md-3">
          <FilterSection urlParam={paramsObject.category} />
        </section>

        {/* This section is for product listing  */}
        <section className="col-md-9"></section>
      </section>
    </div>
  );
};

export default ProductsListing;
