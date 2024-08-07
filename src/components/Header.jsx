import { NavLink } from "react-router-dom";
import { searchProduct } from "../features/filterSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    dispatch(searchProduct(e.target.value));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            ShoppingBuzz
          </a>

          <div className="nav justify-content-center">
            <div className="d-flex w-100" role="search">
              <input
                onChange={searchHandler}
                className="form-control me-2 w-100"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="btn btn-secondary" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/wishlist"}>
                  Wishlist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/cart"} className="nav-link">
                  Cart
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
