import React, { useEffect, useState } from "react";
import {
  fetchMenProducts,
  fetchWomenProducts,
  fetchKidsProducts,
} from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const CategoryFilter = ({ urlParam }) => {
  const dispatch = useDispatch();
  // console.log(urlParam);
  const [category, setCategory] = useState([urlParam]);

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setCategory((prevState) => [...prevState, e.target.value]);
    } else {
      setCategory((prevState) =>
        prevState.filter((prev) => prev !== e.target.value)
      );
    }
  };
  useEffect(() => {
    category.forEach((cat) => {
      if (cat === "Men") {
        dispatch(fetchMenProducts("Men"));
      } else if (cat === "Women") {
        dispatch(fetchWomenProducts("Women"));
      } else if (cat === "Kids") {
        dispatch(fetchKidsProducts("Kids"));
      }
    });
  }, [category]);

  return (
    <section>
      <h5>Category</h5>
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Men"
          checked={category.includes("Men")}
        />
        Men Clothing
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Women"
          checked={category.includes("Women")}
        />
        Women Clothing
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Kids"
          checked={category.includes("Kids")}
        />
        Kids Clothing
      </label>{" "}
      <br />
    </section>
  );
};

export default CategoryFilter;
