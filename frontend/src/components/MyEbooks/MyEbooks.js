import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SERVER_MAIN_URL } from '../../constants';

const MyEbooks = ({
  userId,
}) => {

  let [books, setBooks] = useState([]);
  let [hasNoBooks, setHasNoBooks] = useState(false);

  useEffect(() => {
    fetch(`${SERVER_MAIN_URL}/ebooks/my-ebooks/${userId}`)
      .then(res => res.json())
      .then(books => {
        setBooks(books);

        if (books.length === 0) {
          setHasNoBooks(true);
        };
      })
      .catch(err => console.log(err));
  }, [userId]);


  return (
    <>
      < section className="catagory_section layout_padding" >
        <div className="catagory_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                My ebooks
              </h2>
              {hasNoBooks && <h2>You have no books uploaded yet!</h2>}
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
    </>
  );
};

export default MyEbooks;