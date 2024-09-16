import React from "react";
import Address from "./Address";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex">
          <div className="border p-4 bg-body-tertiary shadow rounded">
            <Address />
          </div>
          <div className="ms-3 p-4">
            <h4>Login</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
