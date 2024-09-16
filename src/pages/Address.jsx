import React, { useState } from "react";
import AddressForm from "../components/AddressForm";
import { useSelector, useDispatch } from "react-redux";
import { removeAddress, deleteAddress } from "../features/filterSlice";

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
    dispatch(deleteAddress(id));
  };

  return (
    <section className="">
      <h4>Address Management</h4>
      <ul>
        {addresses.map((add) => (
          <li key={add.id}>
            {add.name}
            <br />#{add.house} {add.city}, {add.state} ,{add.country}, -{" "}
            {add.postalCode}
            <br />
            Mobile Number: {add.number}
            <br />
            <button
              className="btn btn-sm btn-dark me-2"
              onClick={() => editHandler(add)}
            >
              Edit
            </button>{" "}
            <button
              className="btn btn-sm btn-dark"
              onClick={() => removeHandler(add.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-dark" onClick={handleAddAddressClick}>
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
                  className="close bg-dark border-0 rounded ms-3"
                  onClick={handleCloseModal}
                >
                  <i className="text-light bi bi-x"></i>
                </button>
              </div>
              <div className="modal-body text-light">
                <AddressForm
                  address={currentAddress}
                  setShowModal={setShowModal}
                />
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
