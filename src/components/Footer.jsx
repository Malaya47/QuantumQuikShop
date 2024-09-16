import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="row px-5 py-5">
        <div className="col-md-5">
          <h5 className="fs-3">Shoppify</h5>
          <p>Fill your wardrobes with our signature styled clothes</p>
          <div className="d-flex justify-content-start">
            <a href="https://x.com" target="_blank" className="text-light">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://linkedin.com/in/malaya-tiwari-84a951189"
              target="_blank"
              className="text-light"
            >
              <i className="bi bi-linkedin ms-4"></i>
            </a>
            <a
              href="https://github.com/Malaya47"
              target="_blank"
              className="text-light"
            >
              <i className="bi bi-github ms-4"></i>
            </a>
          </div>
        </div>
        <div className="col-md-3">
          <h5 className="fs-3">Quick Links</h5>
          <div className="ms-1">
            <Link className="text-light linkDecoration">Products</Link> <br />
            <Link to={"/wishlist"} className="text-light linkDecoration">
              Wishlist
            </Link>{" "}
            <br />
            <Link to={"/cart"} className="text-light linkDecoration">
              Cart
            </Link>
          </div>
        </div>
        <div className="col-md-3">
          <h5 className="fs-3">Contact Us</h5>
          <p>
            <i className="bi bi-geo-alt-fill"></i> 201 Oakbrook Center, Indiana
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> +91 23453 98765
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> support@shoppingBuzz.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
