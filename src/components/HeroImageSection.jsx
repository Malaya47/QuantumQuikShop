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
    <div>
      <Carousel />

      <section class="bg-dark mt-5">
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

      <section className=" mb-5 mt-5">
        <div className="row">
          <div className="col-md-4">
            <Link to="/products/Men" className="text-decoration-none text-dark">
              {" "}
              <img
                src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=612x612&w=0&k=20&c=klIlcueGJlAnOehrIZNpvFrVT_olKKqhaVT77H5Fj-s="
                className="rounded img-fluid"
                id="Men"
                onClick={categoryHandler}
              />{" "}
              <p className="text-center fs-4">Men</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to="/products/Women"
              className="text-decoration-none text-dark"
            >
              {" "}
              <img
                src="https://media.istockphoto.com/id/888836942/photo/black-and-white-portrait-of-a-young-woman-laughing-looking-to-the-side-holding-hands-together.jpg?s=1024x1024&w=is&k=20&c=AgKfFDGybhHrrdL4xag6HH5tjQGJAohXZ4mBJvwkpbk="
                className="rounded img-fluid"
                id="Women"
                onClick={categoryHandler}
              />{" "}
              <p className="text-center fs-4">Women</p>
            </Link>
          </div>
          <div className="col-md-4">
            <Link
              to="/products/Kids"
              className="text-decoration-none text-dark"
            >
              {" "}
              <img
                src="https://media.istockphoto.com/id/691139104/photo/black-and-white-portrait-of-a-happy-boy-and-girl.jpg?s=612x612&w=0&k=20&c=1StORgFPOO-ln_VcI50cKtQuZKB8rjHJl81Yu0d8xzU="
                className="rounded img-fluid"
                id="Kids"
                onClick={categoryHandler}
              />{" "}
              <p className="text-center fs-4">Kids</p>
            </Link>
          </div>
        </div>
      </section>
      <ServiceSection />
    </div>
  );
};

export default HeroImageSection;
