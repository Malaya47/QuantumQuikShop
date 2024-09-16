import { NavLink } from "react-router-dom";
import { searchProduct } from "../features/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.filter.wishlist);
  const cart = useSelector((state) => state.filter.cart.cartArray);
  const searchHandler = (e) => {
    dispatch(searchProduct(e.target.value));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  text-light px-2 fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand text-light">
            Shoppify
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <div className="d-flex justify-content-center w-100">
              <div
                className="d-flex"
                style={{ maxWidth: "600px", width: "100%" }}
              >
                <input
                  onChange={searchHandler}
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <NavLink
                  to={"/login"}
                  className="btn btn-secondary"
                  aria-current="page"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link text-light" to="/wishlist">
                  <i className="bi bi-heart fs-5 position-relative">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {wishlist.length}
                    </span>
                  </i>
                </NavLink>
              </li>
              <li className="nav-item ms-3">
                <NavLink className="nav-link text-light" to="/cart">
                  <i className="bi bi-bag fs-5 position-relative">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cart.length}
                    </span>
                  </i>{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
