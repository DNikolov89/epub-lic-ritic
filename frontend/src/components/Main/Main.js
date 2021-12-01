function Main() {
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
              What Says Customers
            </h2>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="client_container ">
                <div className="detail-box">
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/c1.jpg" alt="" />
                  </div>
                  <div className="client_name">
                    <h5>
                      Jone Mark
                    </h5>
                    <h6>
                      Student
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto">
              <div className="client_container ">
                <div className="detail-box">
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/c2.jpg" alt="" />
                  </div>
                  <div className="client_name">
                    <h5>
                      Anna Crowe
                    </h5>
                    <h6>
                      Student
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mx-auto">
              <div className="client_container ">
                <div className="detail-box">
                  <p>
                    Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
                  </p>
                  <span>
                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="client_id">
                  <div className="img-box">
                    <img src="images/c3.jpg" alt="" />
                  </div>
                  <div className="client_name">
                    <h5>
                      Hilley James
                    </h5>
                    <h6>
                      Student
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );

};

export default Main;