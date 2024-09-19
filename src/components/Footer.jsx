import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="py-5 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="fw-bold text-uppercase fs-4 text-light mb-3">
                QuantumQuik Shop
              </div>
              <p>Fill your wardrobes with our signature styled clothes.</p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a
                    className="text-light"
                    href="https://github.com/Malaya47"
                    target="_blank"
                    title="twitter"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="text-light"
                    href="https://linkedin.com/in/malaya-tiwari-84a951189"
                    target="_blank"
                    title="facebook"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-light mb-3">Shop</h6>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light" to={"/products/Women"}>
                    For Women
                  </Link>
                </li>
                <li>
                  <Link className="text-light" to={"/products/Men"}>
                    For Men
                  </Link>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Stores
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Our Blog
                  </a>
                </li>
                <li>
                  <Link className="text-light" to={"/products/Women"}>
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
              <h6 className="text-uppercase text-light mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-light" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Register
                  </a>
                </li>
                <li>
                  <Link className="text-light" to={"/wishlist"}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Our Products
                  </a>
                </li>
                <li>
                  <a className="text-light" href="#">
                    Checkouts
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h6 className="text-uppercase text-light mb-3">
                Daily Offers &amp; Discounts
              </h6>
              <p className="mb-3">
                Stay ahead with our latest deals and discounts!
              </p>
              <form action="#" id="newsletter-form">
                <div className="input-group mb-3">
                  <input
                    className="form-control  border-secondary border-end-0"
                    type="email"
                    placeholder="Your Email Address"
                    aria-label="Your Email Address"
                  />
                  <button
                    className="btn btn-outline-secondary border-start-0"
                    type="submit"
                  >
                    <i className="bi bi-send text-light"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
