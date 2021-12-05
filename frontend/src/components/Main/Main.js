import { useState, useEffect } from "react";

import * as bookService from '../../services/bookService';

function Main() {

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
                          Carousel-item-active
                        </h5>
                        <h1>
                          For All Your <br />
                          Reading Needs
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                        </p>
                        <a href="">
                          Read More
                        </a>
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
                        <h5>
                          First Item
                        </h5>
                        <h1>
                          For All Your <br />
                          Reading Needs
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                        </p>
                        <a href="">
                          Read More
                        </a>
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
                        <h5>
                          Second Item
                        </h5>
                        <h1>
                          For All Your <br />
                          Reading Needs
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                        </p>
                        <a href="">
                          Read More
                        </a>
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



      <section className="client_section layout_padding">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              Last books uploaded
            </h2>
            <hr />
          </div>
          <div className="row">

            {lastTreeBooks.map(book => {
              return (
                <div className="col-md-6 mx-auto">
                  <div className="client_container ">
                    <div className="detail-box">
                      <p>
                        {book.description}
                      </p>
                      <span>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </span>
                    </div>
                    <div className="client_id">
                      <div className="img-box">
                        <img src={book.image} alt="" />
                      </div>
                      <div className="client_name">
                        <h5>
                          {book.title}
                        </h5>
                        <h6>
                          {book.author}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );

};

export default Main;