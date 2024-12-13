import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { signUpUser } from "../features/logInRegisterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
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
    navigate(`/login`);
  };

  return (
    <>
      <Header />
      <section className="container d-flex justify-content-center align-items-center vh-100">
        <div className="row w-100 justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow border-0 rounded">
              <div className="card-body p-4">
                <h1 className="card-title text-center">Sign Up</h1>
                <p className="text-center text-muted mb-4">
                  Join the QuantumQuik revolution! Sign up now and unlock a
                  world of seamless shopping and exclusive perks.
                </p>
                <form onSubmit={signUpHandler}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Enter your name*
                    </label>
                    <input
                      name="name"
                      id="name"
                      className="form-control"
                      type="text"
                      onChange={changeHandler}
                      value={userDetails.name}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Enter your email*
                    </label>
                    <input
                      name="email"
                      id="email"
                      className="form-control"
                      type="email"
                      onChange={changeHandler}
                      value={userDetails.email}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Enter your new password*
                    </label>
                    <input
                      name="password"
                      id="password"
                      className="form-control"
                      type="password"
                      onChange={changeHandler}
                      value={userDetails.password}
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-dark text-uppercase"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
                <p className="text-center mt-3">
                  Already have an account? <Link to="/login">Sign In</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
