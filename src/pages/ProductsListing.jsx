import Header from "../components/Header";
import CardComponent from "../components/CardComponent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterSection from "../components/filterSection/FilterSection";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchWomenProducts,
  fetchMenProducts,
  fetchKidsProducts,
} from "../features/filterSlice";

const ProductsListing = () => {
  const dispatch = useDispatch();
  const menProducts = useSelector((state) => state.filter.menProducts);
  const womenProducts = useSelector((state) => state.filter.womenProducts);
  const kidsProducts = useSelector((state) => state.filter.kidsProducts);
  const allProducts = useSelector((state) => state.filter.products);
  const selectedPrice = useSelector((state) => state.filter.selectedPrice);
  const selectedRating = useSelector((state) => state.filter.selectedRating);
  const paramsObject = useParams();
  // console.log(paramsObject.category);

  // console.log(typeof Number(selectedRating));

  // console.log(womenProducts);
  // console.log(kidsProducts);
  // console.log("Products array", allProducts);

  const filtered = allProducts.filter((product) => {
    const priceFilter = product.productPrice <= selectedPrice;
    // const selectedRating = product.productRating <= Number(selectedRating);
    return priceFilter;
  });

  // console.log(filtered);

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
