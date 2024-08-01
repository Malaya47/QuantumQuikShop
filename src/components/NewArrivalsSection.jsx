const NewArrivalsSection = () => {
  return (
    <div>
      <section>
        <div className="container my-4">
          <div className="row">
            {/* !-- First Card --> */}
            <div className="col-md-6">
              <div className="card bg-light mb-4 h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img
                      src="https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=200"
                      className="img-fluid h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="card-subtitle mb-2 text-muted">
                          New Arrivals
                        </h6>
                      </div>
                      <div className="mt-auto">
                        <h5 className="card-title">Summer Collection</h5>
                        <p className="card-text">
                          Check out our best summer collection to stay cool in
                          this season.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Second Card --> */}
            <div className="col-md-6">
              <div className="card bg-light mb-4 h-100">
                <div className="row g-0 h-100">
                  <div className="col-md-4">
                    <img
                      src="https://images.pexels.com/photos/7494686/pexels-photo-7494686.jpeg?auto=compress&cs=tinysrgb&w=200"
                      className="img-fluid h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8 d-flex flex-column">
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h6 className="card-subtitle mb-2 text-muted">
                          New Arrivals
                        </h6>
                      </div>
                      <div className="mt-auto">
                        <h5 className="card-title">Winter Collection</h5>
                        <p className="card-text">
                          Check out our best winter collection to stay warm in
                          this season.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivalsSection;
