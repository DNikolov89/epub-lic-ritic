import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as bookService from '../../services/bookService';

import InfoSection from "../InfoSection/InfoSection";
import LastThreeBooks from "./LastTreeBooks/LastThreeBooks";

function Main({
  isLogged,
}) {

  let [lastTreeBooks, setLastTreeBooks] = useState([]);
  
  useEffect(() => {
    bookService.getLastTreeBooks()
      .then(books => setLastTreeBooks(books))
      .catch(err => console.log(err))
  }, []);


  return (
    <>
      <div className="hero_area">
        <section className="slider_section ">
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h5>
                          Welcome to Epub/lic/ritic!
                        </h5>
                        <h1>
                          The best web app for <br />
                          ebook recomendations.
                        </h1>
                        <p>
                          Welcome! Epub/lic/ritic is made from book enthusiasts to book enthusiasts. If you want to know more about us - check the button below!
                        </p>
                        <Link to="/about">
                          About us
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h2>
                          If you haven't registered... <br />
                          ...do it now!
                        </h2>
                        <p>
                          Register now to experience a world full of published and available ebooks!
                        </p>
                        <Link to="auth/register">
                          Register
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel_btn_box">
              <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                <i className="fa fa-angle-right" aria-hidden="true"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
      </div>

      {isLogged && <LastThreeBooks lastTreeBooks={lastTreeBooks}/>}
      <InfoSection />

    </>
  );

};

export default Main;