import './Delete.css';

import { useNavigate, useParams } from 'react-router-dom';

import * as bookService from '../../../../services/bookService';

const Delete = () => {

    const navigate = useNavigate();

    let { genre, bookId } = useParams();

    const onClickYesHandler = async (e) => {
        e.preventDefault();

        try {

            await bookService.deleteOneBook(bookId);

            navigate(`/categories/${genre}`);

        } catch (err) {
            console.log(err)
        };
    };

    const onClickNoHandler = () => {

        navigate(`/categories/${genre}/${bookId}`);

    };

    return (
        <div id="delete-book-dialog-wrapper">
            <div id="delete-book-question">Are you certain that you want to delete this book?</div>
            <button id="yes-delete-button" onClick={onClickYesHandler}>Yes</button>
            <button id="no-delete-button" onClick={onClickNoHandler}>No</button>
        </div>
    );
};

export default Delete;