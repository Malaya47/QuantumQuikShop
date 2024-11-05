import React, { useEffect, useState } from "react";
import Address from "./Address";
import Header from "../components/Header";
import { Link } from "react-router-dom";
// import { generateToken, removeTokenFromRedux } from "../features/filterSlice";
import { generateToken, removeTokenFromRedux } from "../features/logInRegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.filter.token);
  const token = useSelector((state) => state.logInRegister.token);


  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

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

  const logoutHandler = () => {
    localStorage.removeItem("admin-token");
    dispatch(removeTokenFromRedux(null));
    setIsLoggedIn(false);
  };

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);



  return (
    <>
      <ToastContainer theme="dark" autoClose={1000} />
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex">
          <div className="border p-4 bg-body-tertiary shadow rounded align-self-start">
            {isLoggedIn ? (
              <Address />
            ) : (
              <>
                <h1>Sign In</h1>
                <p>Ready to dive back in? Let’s go!</p>
              </>
            )}
          </div>
          <div className="ms-3 p-4">
            {/* Login form */}
            {isLoggedIn ? (
              <button onClick={logoutHandler} className="btn btn-dark">
                LogOut
              </button>
            ) : (
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
                  required
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
                  required
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
