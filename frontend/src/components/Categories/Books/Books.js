import './Books.css';

import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { SERVER_MAIN_URL } from '../../../constants';

function Books() {

  let { genre } = useParams();

  let [books, setBooks] = useState([]);
  let [error, setError] = useState({});
  let [noBooks, setNoBooks] = useState(false);

  useEffect(() => {
    fetch(`${SERVER_MAIN_URL}/ebooks/${genre}`)
      .then(res => res.json())
      .then(books => {

        if (books.length === 0) {
          setNoBooks(true);
        };

        books.map(book => {

          if (book.votes !== []) {
            return book.votes = (book.votes?.reduce((a, b) => a + b.vote, 0) / book.votes.length).toFixed(2);
          };

        });

        if (books.type === 'error') {
          setError(books);
        } else {
          setBooks(books);
        };
      })
      .catch(err => console.log(err))

  }, [genre]);

  return (
    <>
      <section className="catagory_section layout_padding">
        <div className="catagory_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                {genre.charAt(0).toUpperCase().concat(genre.slice(1))}
              </h2>
            </div>
            <div className="row">
              {error && <div>{error.message}</div>}
              {noBooks && <h4 id="no-books-message">No books in this category.</h4>}

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
                          Rating: {isNaN(book.votes) ? "No rating yet" : book.votes}
                        </p>
                        <Link to={`/categories/${genre}/${book._id}`}>
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
    </>
  );
};

export default Books;