import React, { useEffect, useState } from "react";
import { getSelectedPrice } from "../../features/filterSlice";
import { useDispatch } from "react-redux";

const PriceFilter = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(1000);
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  useEffect(() => {
    dispatch(getSelectedPrice(Number(price)));
  }, [price]);
  return (
    <section>
      <h5>Price</h5>
      <input
        onChange={handlePriceChange}
        type="range"
        className="form-range"
        min="1000"
        max="2000"
        step="100"
        id="price"
        value={price}
      />
    </section>
  );
};

export default PriceFilter;
