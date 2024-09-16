import React, { useEffect, useState } from "react";
import {
  fetchMenProducts,
  fetchWomenProducts,
  fetchKidsProducts,
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const CategoryFilter = ({ urlParam }) => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    // Checking the urlParam and setting the category state accordingly
    if (urlParam === "Men") {
      setCategory((prevCategory) => [...prevCategory, "Men"]);
      dispatch(fetchMenProducts("Men"));
    } else if (urlParam === "Women") {
      setCategory((prevCategory) => [...prevCategory, "Women"]);
      dispatch(fetchWomenProducts("Women"));
    } else if (urlParam === "Kids") {
      setCategory((prevCategory) => [...prevCategory, "Kids"]);
      dispatch(fetchKidsProducts("Kids"));
    }
  }, [urlParam, dispatch]);

  const handleCategoryChange = (e) => {
    if (e.target.checked) {
      setCategory((prevCategory) => [...prevCategory, e.target.value]);
      if (e.target.value === "Men") {
        dispatch(fetchMenProducts(e.target.value));
      } else if (e.target.value === "Women") {
        dispatch(fetchWomenProducts(e.target.value));
      } else if (e.target.value === "Kids") {
        dispatch(fetchKidsProducts(e.target.value));
      }
    } else {
      setCategory((prevCategory) =>
        prevCategory.filter((val) => val !== e.target.value)
      );
      if (e.target.value === "Men") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );
        dispatch(emptyMenArray([]));
      } else if (e.target.value === "Women") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );

        dispatch(emptyWomenArray([]));
      } else if (e.target.value === "Kids") {
        setCategory((prevVal) =>
          prevVal.filter((val) => val !== e.target.value)
        );

        dispatch(emptyKidsArray([]));
      }
    }
  };

  return (
    <section className="mb-4">
      <h5>Category</h5>
      <label className="form-check-label">
        <input
          onChange={handleCategoryChange}
          className="form-check-input me-1"
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
          className="form-check-input me-1"
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
          className="form-check-input me-1"
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
