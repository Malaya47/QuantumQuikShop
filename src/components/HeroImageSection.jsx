import { Link } from 'react-router-dom'

const HeroImageSection = () => {
  return (
    <div>
      <section className="mt-5 mb-5 container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/products/Men">
              {" "}
              <img
                src="https://placehold.co/300x200?text=Men"
                className="rounded img-fluid"
              />{" "}
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/Women">
              {" "}
              <img
                src="https://placehold.co/300x200?text=Women"
                className="rounded img-fluid"
              />{" "}
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/products/Kids">
              {" "}
              <img
                src="https://placehold.co/300x200?text=Kids"
                className="rounded img-fluid"
              />{" "}
            </Link>
          </div>
        </div>
      </section>

      <section className=" mb-3">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img-fluid"
        />
      </section>
    </div>
  );
};

export default HeroImageSection;
