import './Books.css';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SERVER_MAIN_URL } from '../../../constants';

function Books({
  bookCategory,
}) {

  let [books, setBooks] = useState([]);
  let [error, setError] = useState({});

  useEffect(() => {
    fetch(`${SERVER_MAIN_URL}/ebooks/${bookCategory}`)
      .then(res => res.json())
      .then(books => {
        if (books.type === 'error') {
          setError(books);
        } else {
          setBooks(books);
        };
      })
      .catch(err => console.log(err))
  }, [bookCategory]);


  return (
    <section className="catagory_section layout_padding">
      <div className="catagory_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>
              {bookCategory}
            </h2>
          </div>
          <div className="row">
            {error && <div>{error.message}</div>}
            {books.map(book => {
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
                      <p>
                        Rating: {book.rating}
                      </p>
                        <Link to={`/categories/${bookCategory}/${book._id}`}>
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
    </section>
  );
};

export default Books;