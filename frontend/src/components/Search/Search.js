import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import * as bookService from '../../services/bookService';

const Search = () => {

    let [results, setResults] = useState([]);
    let { inputText } = useParams();

    useEffect(() => {
        bookService.getAll(inputText)
            .then(books => setResults(books))
            .catch(err => console.log(err))
    }, [inputText]);

    return (
        < section className="catagory_section layout_padding" >
            <div className="catagory_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>
                            Results
                        </h2>
                    </div>
                    <div className="row">
                        {results.map(book => {
                            return (
                                <div key={book._id} className="col-sm-6 col-md-4 ">
                                    <div className="box ">
                                        <div className="img-box">
                                            <img src={book.image} alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                {book.title}
                                            </h5>
                                            <h6>
                                                {book.author}
                                            </h6>
                                            <p>
                                                {book.description}
                                            </p>
                                            <Link to={`/categories/${book.genre}/${book._id}`}>
                                                <button id="details-button">Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Search;