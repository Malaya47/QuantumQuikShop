import React from "react";
import { Link } from "react-router-dom";
import {
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../features/filterSlice";
import { useDispatch } from "react-redux";

const Carousel = () => {
  const dispatch = useDispatch();
  const carouselCategoryHandler = (e) => {
    if (e.target.id === "Men") {
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Women") {
      dispatch(emptyMenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Kids") {
      dispatch(emptyWomenArray([]));
      dispatch(emptyMenArray([]));
    }
  };
  return (
    <>
      <section className="">
        {/* Circle Slider */}
        <div
          id="carouselExampleIndicators"
          data-bs-ride="carousel"
          data-bs-interval="2000"
          className="carousel slide"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{
                height: "670px",
                background:
                  "url(https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1722769196/circle-slider-1_oe2emx.jpg) no-repeat right bottom",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5 ">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Just arrived
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">
                        Tigerrrs College Jackets
                      </h2>
                      <p className="lead mb-4">
                        Discover our collection of college jackets, blending
                        classic style with modern comfort for a perfect campus
                        look.
                      </p>
                      <p>
                        <Link
                          to={"/products/Men"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Men"
                          onClick={carouselCategoryHandler}
                        >
                          View Men collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                height: "670px",
                background:
                  "url(https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1722769196/circle-slider-3_mewyfg.jpg) no-repeat right bottom",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Special
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">
                        Autumn-colour coats
                      </h2>

                      <p className="lead mb-4 ">
                        Immerse yourself in the beauty of a golden sunset over a
                        tranquil beach, perfect for relaxation.
                      </p>

                      <p>
                        <Link
                          to={"/products/Women"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Women"
                          onClick={carouselCategoryHandler}
                        >
                          View women collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                height: "670px",
                background:
                  "url(https://res.cloudinary.com/dlrlwy7hg/image/upload/q_auto,f_auto/v1722769196/circle-slider-2_vty8mf.jpg) no-repeat right bottom",
              }}
            >
              <div className="d-flex align-items-end h-100 text-white p-5 bg-dark bg-opacity-50">
                <div className="container">
                  <div className="row py-5">
                    <div className="col-lg-6 py-md-5 py-lg-7 ps-5">
                      <h5 className="text-uppercase text-muted mb-3 letter-spacing-5">
                        Special
                      </h5>
                      <h2 className="mb-3 fw-semibold fs-1">Ethnic clothes</h2>
                      <p className="lead mb-4">
                        Explore our range of ethnic clothes featuring timeless
                        designs and vibrant colors, perfect for any occasion.
                      </p>
                      <p>
                        <Link
                          to={"/products/Kids"}
                          className="btn btn-outline-dark text-uppercase"
                          id="Kids"
                          onClick={carouselCategoryHandler}
                        >
                          View kids collection
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* /Circle Slider */}
      </section>
    </>
  );
};

export default Carousel;
