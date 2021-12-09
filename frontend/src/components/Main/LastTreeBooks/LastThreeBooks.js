import { Link } from "react-router-dom";

const LastThreeBooks = ({
    lastTreeBooks,
}) => {
    return (
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
                            <div key={book._id} className="col-md-6 mx-auto">
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
                                            <img src={book.image} alt="Book cover" />
                                        </div>
                                        <div className="client_name">
                                            <h5>
                                                <Link to={`/categories/${book.genre}/${book._id}`}>{book.title}</Link>
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
    );
};

export default LastThreeBooks;