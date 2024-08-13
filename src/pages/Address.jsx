import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress } from "../features/filterSlice";

const Address = () => {
  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.filter.addresses);
  const [showModal, setShowModal] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null); // To store the address being edited

  const handleAddAddressClick = () => {
    setCurrentAddress(null); // Reset currentAddress when adding a new address
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const editHandler = (address) => {
    setCurrentAddress(address); // Set the address to be edited
    setShowModal(true);
  };

  const removeHandler = (id) => {
    dispatch(removeAddress(id));
  };

  return (
    <section className="align-self-center">
      <h4>Address Management</h4>
      <ul>
        {addresses.map((add) => (
          <li key={add.id}>
            {add.name}
            <br />#{add.house} {add.city}, {add.state} ,{add.country},{" "}
            {add.postalCode}
            <br />
            {add.number}
            <button onClick={() => editHandler(add)}>Edit</button>
            <button onClick={() => removeHandler(add.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleAddAddressClick}>
        Add new address
      </button>

      {/* Modal Structure */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {currentAddress ? "Edit Address" : "Add New Address"}
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body text-light">
                <AddressForm address={currentAddress} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Address;
