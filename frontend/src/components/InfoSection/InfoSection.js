import { Link } from "react-router-dom";

function InfoSection() {
    return (
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-3 info-col">
                        <div className="info_detail">
                            <h4>
                                About Us
                            </h4>
                            <p>
                                epub/lic/ritic is made from ebook enthusiasts to ebook enthusiasts. For more info visit our About us page.
                            </p>
                            <div className="info_social">
                                <Link to="">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 info-col">
                        <div className="info_contact">
                            <h4>
                                Address
                            </h4>
                            <div className="contact_link_box">
                                <a href="https://goo.gl/maps/SFXMM97X1UVdeyqV9">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        Bulgaria, Sofia, 23 Tsar Osvoboditel
                                    </span>
                                </a>
                                <Link to="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Call +359 02 348 291
                                    </span>
                                </Link>
                                <Link to="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        epublicritic@gmail.com
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-lg-3 info-col">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;