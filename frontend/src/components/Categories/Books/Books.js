import { Link } from "react-router-dom";

import './Books.css'

function Books() {
    return (
        <section className="catagory_section layout_padding">
        <div className="catagory_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Biography-Fantasy-Science...
              </h2>
            </div>
            <div className="row">

              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      <Link to="/categories/books"> Book title here </Link>
                    </h5>
                    <p>
                      Book review here
                    </p>
                    <p>
                      Rating: 5
                    </p>
                    <p>
                      Comments: Amazing!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      <Link to="/categories/books"> Book title here </Link>
                    </h5>
                    <p>
                      Book review here
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 ">
                <div className="box ">
                  <div className="img-box">
                    <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>
                      <Link to="/categories/books"> Book title here </Link>
                    </h5>
                    <p>
                      Book review here
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

export default Books;