import './Edit.css';

import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as bookService from '../../../../services/bookService';

const Edit = () => {

    let { genre, bookId } = useParams();
    let [currentBook, setCurrentBook] = useState({ genre, _id: bookId });
    let navigate = useNavigate();

    useEffect(() => {
        bookService.getOne(currentBook.genre, currentBook._id)
            .then(res => setCurrentBook(res))
    }, [currentBook.genre, currentBook._id]);



    const ebookSubmitEditHandler = (e) => {
        e.preventDefault();

        let bookData = Object.fromEntries(new FormData(e.currentTarget));

        bookService.editBook({ ...bookData, _id: bookId })
            .then(data => setCurrentBook(data))
            .then(navigate(`/categories/${currentBook.genre}/${currentBook._id}`))
            .catch(err => console.log(err))
    };

    return (
        <section id="edit-book-section" >
            <form id="ebook-edit-form" method="POST" onSubmit={ebookSubmitEditHandler}>
                <fieldset>
                    <legend>Edit e-book</legend>
                    <p className="field">
                        <label htmlFor="genre">Genre</label>
                        <span className="edit-book-span-field">
                            <select className="edit-book-input-fields" name="genre" id="genre" defaultValue={currentBook.genre}>
                                <option value="classic">Classic</option>
                                <option value="science">Science</option>
                                <option value="history">History</option>
                                <option value="biography">Biography</option>
                                <option value="adventure">Adventure</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="title">Title</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="title" id="title" placeholder="Title of the book" defaultValue={currentBook.title} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="author">Author</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="author" id="author" placeholder="Author name" defaultValue={currentBook.author} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="year">Year</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="year" id="year" placeholder="Year of publishing" defaultValue={currentBook.year} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image link</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="image" id="image" placeholder="Image link" defaultValue={currentBook.image} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="description" id="description" placeholder="Description in few simple sentences..." defaultValue={currentBook.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="link">Download link</label>
                        <span className="edit-book-span-field">
                            <input className="edit-book-input-fields" type="text" name="link" id="link" placeholder="Place download link" defaultValue={currentBook.link} />
                        </span>
                    </p>
                    <input id="edit-button" type="submit" value="Edit e-book!" />
                </fieldset>
            </form>
        </section>
    );
};

export default Edit;