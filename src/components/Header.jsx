const Header = () => {
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
                <a className="nav-link" href="#">
                  Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Cart

                </a>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
