import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
  
  return (
    <>
      <Header />
      <section className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex">
          <div className="border p-4 bg-body-tertiary shadow rounded align-self-start">
            {/* <Address /> */}
            <h1>Sign Up</h1>
            <p>
              Looks like you're new here! Sign up with your email to get started
            </p>
          </div>
          <div className="ms-3 p-4">
            {/* signup form */}

            <form>
              <label className="form-label" htmlFor="name">
                Enter your name *
              </label>
              <input
                id="name"
                className="form-control form-control-sm mb-2"
                type="text"
              />
              <label className="form-label" htmlFor="email">
                Enter your email *
              </label>
              <input
                id="email"
                className="form-control form-control-sm mb-2"
                type="text"
              />
              <label className="form-label" htmlFor="password">
                Enter your new password *
              </label>
              <input
                id="password"
                className="form-control form-control-sm mb-2"
                type="password"
              />

              <div className="d-grid gap-2 mt-3 mb-2">
                <button type="submit" className="btn btn-sm btn-dark">Sign Up</button>
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
