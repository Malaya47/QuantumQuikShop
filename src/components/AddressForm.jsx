import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import {
//   addAddresses,
//   updateAddress,
//   addAddress,
//   updatedAddress,
// } from "../features/filterSlice";
import {
  addAddresses,
  updateAddress,
  addAddress,
  updatedAddress,
} from "../features/logInRegisterSlice";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library

const AddressForm = ({ address, setShowModal }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState(uuidv4());
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    if (address) {
      setId(address.id);
      setName(address.name);
      setHouse(address.house);
      setCity(address.city);
      setState(address.state);
      setCountry(address.country);
      setPostalCode(address.postalCode);
      setNumber(address.number);
    }
  }, [address]);

  const AddressHandler = (e) => {
    e.preventDefault();
    const newAddress = {
      id,
      name,
      house,
      city,
      state,
      country,
      postalCode,
      number,
    };

    if (address) {
      dispatch(updateAddress(newAddress));
      dispatch(updatedAddress(newAddress));
      setShowModal(false);
      setId("");
      setName("");
      setHouse("");
      setCity("");
      setState("");
      setCountry("");
      setPostalCode("");
      setNumber("");
    } else {
      dispatch(addAddresses(newAddress));
      dispatch(addAddress(newAddress));
      setShowModal(false);
      setId("");
      setName("");
      setHouse("");
      setCity("");
      setState("");
      setCountry("");
      setPostalCode("");
      setNumber("");
    }
  };

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <form>
        <div>
          <label className="form-label" htmlFor="name">
            Enter your Name
          </label>
          <input
            type="text"
            className="form-control border border-dark"
            placeholder="Name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="house">
            Enter your House No.
          </label>
          <input
            type="text"
            className="form-control border-dark"
            placeholder="House No., Flat, Building, Street"
            name="house"
            onChange={(e) => setHouse(e.target.value)}
            value={house}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="city">
            Enter your City
          </label>
          <input
            type="text"
            className="form-control border-dark"
            placeholder="City"
            name="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="state">
            Enter your State
          </label>
          <input
            type="text"
            className="form-control border-dark"
            placeholder="State"
            name="state"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="country">
            Enter your Country
          </label>
          <input
            type="text"
            className="form-control border-dark"
            placeholder="Country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="postalCode">
            Enter your Postal Code
          </label>
          <input
            type="number"
            className="form-control border-dark"
            placeholder="Postal Code"
            name="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
          />
        </div>
        <div className="mt-2">
          <label className="form-label border-dark" htmlFor="mobile">
            Enter your Mobile Number
          </label>
          <input
            type="number"
            className="form-control border-dark"
            placeholder="Mobile Number"
            name="mobile"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>
        <button
          type="submit"
          className="mt-2 btn btn-dark"
          onClick={AddressHandler}
        >
          {address ? "Update Address" : "Add Address"}
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
