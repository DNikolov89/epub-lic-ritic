import { Link } from "react-router-dom";

function About() {
    return (
        <section className="about_section layout_padding">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src="images/about-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2>
                                    Our mission
                                </h2>
                            </div>
                            <p>
                                Our mission and sole purpose is to connect book authors and book lovers worldwide by giving them the opportunity to share ebooks that they have authored or just loved with other like-minded people. By visiting our website and sharing or upvoting ebooks you help ebooks widespreding and assessment which is verry helpfull for young authors and book lookers. Thank you for your interest and have a nice page-turning! <br/><br/> If you wish you can contact us below.
                            </p>
                            <Link to="/contacts">Contact us!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;