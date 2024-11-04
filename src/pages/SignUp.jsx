import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { signUpUser } from "../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
    name: "",
  });

  const changeHandler = (e) => {
    setUserDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(userDetails));
    setUserDetails({
      password: "",
      email: "",
      name: "",
    });
  };

  return (
    <>
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex">
          <div className="border p-4 bg-body-tertiary shadow rounded align-self-start">
            <h1>Sign Up</h1>
            <p>
              Looks like you're new here! Sign up with your email to get started
            </p>
          </div>
          <div className="ms-3 p-4">
            {/* signup form */}

            <form onSubmit={signUpHandler}>
              <label className="form-label" htmlFor="name">
                Enter your name *
              </label>
              <input
                name="name"
                id="name"
                className="form-control form-control-sm mb-2"
                type="text"
                onChange={changeHandler}
                value={userDetails.name}
                required
              />
              <label className="form-label" htmlFor="email">
                Enter your email *
              </label>
              <input
                name="email"
                id="email"
                className="form-control form-control-sm mb-2"
                type="text"
                onChange={changeHandler}
                value={userDetails.email}
                required
              />
              <label className="form-label" htmlFor="password">
                Enter your new password *
              </label>
              <input
                name="password"
                id="password"
                className="form-control form-control-sm mb-2"
                type="password"
                onChange={changeHandler}
                value={userDetails.password}
                required
              />

              <div className="d-grid gap-2 mt-3 mb-2">
                <button type="submit" className="btn btn-sm btn-dark">
                  Sign Up
                </button>
              </div>
              <p>
                Already have an account? <Link to={"/login"}>Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
