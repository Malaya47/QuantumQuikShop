import React from "react";

const CategoryFilter = () => {
  const handleCategoryChange = () => {};
  return (
    <section>
      <h5>Category</h5>
      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Men"
          // checked={category.includes("Men")}
        />
        Men Clothing
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Women"
          // checked={category.includes("Women")}
        />
        Women Clothing
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          // onChange={handleCategoryChange}
          className="form-check-input"
          type="checkbox"
          value="Kids"
          // checked={category.includes("Kids")}
        />
        Kids Clothing
      </label>{" "}
      <br />
    </section>
  );
};

export default CategoryFilter;
