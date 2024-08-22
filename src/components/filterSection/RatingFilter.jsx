import React, { useEffect, useState } from "react";
import { getSelectedRating } from "../../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const RatingFilter = () => {
  const dispatch = useDispatch();
  const selectedRating = useSelector((state) => state.filter.selectedRating);

  const handleRatingChange = (e) => {
    dispatch(getSelectedRating(Number(e.target.value)));
  };

  return (
    <section className="mb-4">
      <h5>Rating</h5>
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value={4}
          onChange={handleRatingChange}
          checked={selectedRating === 4}
        />{" "}
        4 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value={3}
          onChange={handleRatingChange}
          checked={selectedRating === 3}
        />{" "}
        3 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value={2}
          onChange={handleRatingChange}
          checked={selectedRating === 2}
        />{" "}
        2 Stars & above
      </label>{" "}
      <br />
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value={1}
          onChange={handleRatingChange}
          checked={selectedRating === 1}
        />{" "}
        1 Stars & above
      </label>{" "}
      <br />
    </section>
  );
};

export default RatingFilter;
