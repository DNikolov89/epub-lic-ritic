import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './Details.css';

import { SERVER_MAIN_URL } from '../../../constants';

function Details() {

    let [book, setBook] = useState({});
    let { bookId, bookCategory } = useParams();

    console.log(bookId)

    useEffect(() => {
        fetch(`${SERVER_MAIN_URL}/ebooks/${bookCategory}/${bookId}`)
            .then(res => res.json())
            .then(res => {
                setBook(res);
            })
            .catch(err => console.log(err))
    }, []);


    return (
        <div id="details-wrapper">
            <img id="details-img" src={book.image} alt="Book cover"></img>
            <div id="details-content-wrapper">
                <h2> Book Info </h2>
                <h5>Title: {book.title}</h5>
                <h5>Author: {book.author}</h5>
                <h5>Year: {book.year}</h5>
                <h5>Genre: {book.genre}</h5>
                <h5>Description: {book.description}</h5>
                {book.link !== ""
                    ? <a href={book.link}>Download link</a>
                    : ""
                }
                <h5>Votes: {book.votes}</h5>
            </div>
            <div id="details-button-wrapper">
                <Link to={`/categories/${bookCategory}/${bookId}/edit`}>
                    <button id="edit-button">Edit</button>
                </Link>
                <Link to={`/categories/${bookCategory}/${bookId}/delete`}>
                    <button id="delete-button">Delete</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;