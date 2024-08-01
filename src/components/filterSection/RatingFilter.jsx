import React from "react";

const RatingFilter = () => {
  const handleRatingChange = () => {};
  return (
    <section>
      <h5>Rating</h5>
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value="4"
          // onChange={handleRatingChange}
          // checked={ratings === "4"}
        />{" "}
        4 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value="3"
          // onChange={handleRatingChange}
          // checked={ratings === "3"}
        />{" "}
        3 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value="2"
          // onChange={handleRatingChange}
          // checked={ratings === "2"}
        />{" "}
        2 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value="1"
          // onChange={handleRatingChange}
          // checked={ratings === "1"}
        />{" "}
        1 Stars & above
      </label>{" "}
      <br />
    </section>
  );
};

export default RatingFilter;
