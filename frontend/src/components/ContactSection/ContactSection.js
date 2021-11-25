function ContactSection() {
    return (
      <section className="contact_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="heading_container ">
              <h2 className="">
                Contact Us
              </h2>
            </div>
            <form action="#">
              <div>
                <input type="text" placeholder="Name" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" placeholder="Pone Number" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn-box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/contact-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default ContactSection;