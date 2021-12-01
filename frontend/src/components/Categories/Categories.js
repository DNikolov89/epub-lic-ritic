import { Link } from "react-router-dom";

function Categories() {

  return (
    <section className="catagory_section layout_padding">
      <div className="catagory_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Books Categories
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/books"> Textbooks </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/science"> Science </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                    <Link to="/categories/history"> History </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat4.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  <Link to="/categories/biography"> Biography </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat5.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  <Link to="/categories/adventure"> Adventure </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/cat6.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>
                  <Link to="/categories/fantasy"> Fantasy </Link>
                  </h5>
                  <p>
                    fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The
                    point of using
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;