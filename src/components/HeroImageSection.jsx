import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  emptyMenArray,
  emptyWomenArray,
  emptyKidsArray,
} from "../features/filterSlice";

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
      <section className="mt-5 mb-3">
        <img
          src="https://res.cloudinary.com/donqbxlnc/image/upload/v1648837512/fashify/01042022-D-Unisex-topbannercarousel-p3-brands-4090_bwk2pu.jpg"
          className="img-fluid"
        />
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
      {/* <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://media.istockphoto.com/id/656673020/photo/handsome-in-spectacles.jpg?s=612x612&w=0&k=20&c=klIlcueGJlAnOehrIZNpvFrVT_olKKqhaVT77H5Fj-s="
              className="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/888836942/photo/black-and-white-portrait-of-a-young-woman-laughing-looking-to-the-side-holding-hands-together.jpg?s=1024x1024&w=is&k=20&c=AgKfFDGybhHrrdL4xag6HH5tjQGJAohXZ4mBJvwkpbk="
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://media.istockphoto.com/id/691139104/photo/black-and-white-portrait-of-a-happy-boy-and-girl.jpg?s=612x612&w=0&k=20&c=1StORgFPOO-ln_VcI50cKtQuZKB8rjHJl81Yu0d8xzU="
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
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
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

export default HeroImageSection;
