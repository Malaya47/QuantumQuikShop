import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../features/filterSlice";

import Carousel from "./Carousel";
import ServiceSection from "./ServiceSection";

const HeroImageSection = () => {
  const dispatch = useDispatch();

  const categoryHandler = (e) => {
    if (e.target.id === "Men") {
      console.log("Men");
      dispatch(emptyWomenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Women") {
      console.log("Women");
      dispatch(emptyMenArray([]));
      dispatch(emptyKidsArray([]));
    } else if (e.target.id === "Kids") {
      console.log("Kids");
      dispatch(emptyWomenArray([]));
      dispatch(emptyMenArray([]));
    }
  };

  return (
    <div>
      <Carousel />

      <section className="bg-dark mt-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-white text-center  py-5">
              <h2 class="display-4 text-uppercase mb-4">Final Sales</h2>
              <p class="mb-0">Up to</p>
              <h2 class="display-1 fw-bold mb-3">70%</h2>
              <p class="mb-5">* Free shipping on orders over Rs 1000.</p>
              <p>
                <a class="btn btn-outline-light" href="#">
                  Shop Now
                </a>
              </p>
            </div>
            <div
              class="col-lg-6 d-flex align-items-center justify-content-center"
              style={{
                background: `url(https://res.cloudinary.com/dt01fsrbz/image/upload/serrah-galos-494279-unsplash-square_irnatj.jpg) no-repeat right bottom`,
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="row gx-0">
          {/* Women Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dt01fsrbz/image/upload/v1731771168/cover-1_gyptyp.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Women</h1>
                <Link
                  to={`/products/Women`}
                  className="btn btn-light stretched-link"
                  id="Women"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Women <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Men Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dt01fsrbz/image/upload/v1731771272/cover-2_iqnkxs.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Men</h1>
                <Link
                  to={`/products/Men`}
                  className="btn btn-light stretched-link"
                  id="Men"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Men <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Kids Card */}
          <div
            className="col-12 col-md-6 col-lg-4 d-flex flex-column"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dt01fsrbz/image/upload/v1731771323/cover-3_ffxofu.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className="card text-white text-center bg-dark bg-opacity-50 d-flex flex-grow-1"
              style={{ minHeight: "470px" }}
            >
              <div className="card-body d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className="fw-bold mb-4">Kids</h1>
                <Link
                  to={`/products/Kids`}
                  className="btn btn-light stretched-link"
                  id="Kids"
                  onClick={(e) => categoryHandler(e)}
                >
                  Shop Kids <i className="bi bi-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceSection />
    </div>
  );
};

export default HeroImageSection;
