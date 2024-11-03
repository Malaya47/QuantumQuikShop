import React, { useState } from "react";
import Address from "./Address";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { generateToken } from "../features/filterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(generateToken(userDetails));
    setUserDetails({
      password: "",
      email: "",
    });
  };

  return (
    <>
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex">
          <div className="border p-4 bg-body-tertiary shadow rounded align-self-start">
            {/* <Address /> */}
            <h1>Sign In</h1>
            <p>Ready to dive back in? Let’s go!</p>
          </div>
          <div className="ms-3 p-4">
            {/* Login form */}

            <form onSubmit={loginHandler}>
              <label className="form-label" htmlFor="email">
                Enter your email *
              </label>
              <input
                id="email"
                name="email"
                className="form-control form-control-sm mb-2"
                type="text"
                onChange={changeHandler}
                value={userDetails.email}
              />
              <label className="form-label" htmlFor="password">
                Enter your password *
              </label>
              <input
                id="password"
                name="password"
                className="form-control form-control-sm mb-2"
                type="password"
                onChange={changeHandler}
                value={userDetails.password}
              />

              <div className="d-grid gap-2 mt-3 mb-2">
                <button type="submit" className="btn btn-sm btn-dark">
                  Sign In
                </button>
              </div>
              <p>
                Don't have an account? <Link to={"/signup"}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
