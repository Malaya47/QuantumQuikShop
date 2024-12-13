import React, { useEffect, useState } from "react";
import Address from "./Address";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import {
  generateToken,
  removeTokenFromRedux,
} from "../features/logInRegisterSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();

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
    const userType = e.nativeEvent.submitter.name;

    if (userType === "signInUser") {
      dispatch(generateToken(userDetails));
      setUserDetails({
        password: "",
        email: "",
      });
    } else if (userType === "signInGuest") {
      const guestUser = { email: "drex@gmail.com", password: "drex" };

      dispatch(generateToken(guestUser));
      setUserDetails(guestUser);
    }
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
    <section>
      <ToastContainer theme="dark" autoClose={1000} />
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <div className="card shadow-sm rounded-3">
                <div className="card-body">
                  {isLoggedIn ? (
                    <>
                      <h2 className="text-center mb-4">Welcome Back!</h2>
                      <Address />
                      <button
                        onClick={logoutHandler}
                        className="btn btn-dark w-100 mt-4"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-center mb-3">Sign In</h2>
                      <p className="text-center text-muted mb-4">
                        Get ready to shop smarter, faster, better – Your journey
                        starts here!
                      </p>
                      <form onSubmit={loginHandler}>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="email">
                            Email Address*
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={userDetails.email}
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label" htmlFor="password">
                            Password*
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            value={userDetails.password}
                            onChange={changeHandler}
                          />
                        </div>

                        <div className="d-grid gap-2">
                          <button
                            type="submit"
                            name="signInUser"
                            className="btn btn-dark text-uppercase"
                          >
                            Sign In
                          </button>
                          <button
                            type="submit"
                            name="signInGuest"
                            className="btn btn-secondary text-uppercase"
                          >
                            Sign in as Guest
                          </button>
                        </div>
                      </form>
                      <p className="text-center mt-3">
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Login;
