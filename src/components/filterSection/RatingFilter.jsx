import React, { useEffect, useState } from "react";
import { getSelectedRating } from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const RatingFilter = () => {
  const dispatch = useDispatch();
  const [ratings, setRatings] = useState("");
  const handleRatingChange = (e) => {
    setRatings(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelectedRating(ratings));
  }, [ratings]);
  return (
    <section>
      <h5>Rating</h5>
      <label className="form-check-label">
        <input
          className="form-check-input"
          type="radio"
          name="ratings"
          value="4"
          onChange={handleRatingChange}
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
          onChange={handleRatingChange}
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
          onChange={handleRatingChange}
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
          onChange={handleRatingChange}
        />{" "}
        1 Stars & above
      </label>{" "}
      <br />
    </section>
  );
};

export default RatingFilter;
