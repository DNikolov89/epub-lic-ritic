import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Books.css';

import { SERVER_MAIN_URL } from '../../../constants';

function Books({
  bookCategory,
}) {

  let [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_MAIN_URL}/ebooks/${bookCategory}`)
      .then(res => res.json())
      .then(books => {
        setBooks(books);
      })
      .catch(err => console.log(err))
  }, []);


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