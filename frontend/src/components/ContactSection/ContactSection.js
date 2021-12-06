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
            <div>
              <h4>epub/lic/ritic</h4>
              <p>Bulgaria, Sofia, 23 Tsar Osvoboditel Str., fl. 3</p>
              <p>Office phone: +359 02 348 291 </p>
              <p>Email: epublicritic@gmail.com</p>
            </div>
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