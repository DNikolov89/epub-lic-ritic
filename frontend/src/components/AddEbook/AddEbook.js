import './AddEbook.css'

import { SERVER_MAIN_URL } from '../../constants';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddEbook() {
    let [linkWarning, setLinkWarning] = useState(false);
    let { loggedUserData } = useContext(AuthContext);
    let navigate = useNavigate();

    const linkOnClickWarning = (e) => {
        e.preventDefault();

        setLinkWarning(true);
    };

    const ebookSubmitHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let data = Object.fromEntries(formData);

        let userId = loggedUserData._id;

        try {
            let jsonResponce = await fetch(`${SERVER_MAIN_URL}/ebooks/addebook`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...data, _ownerId: userId })
            });

            let newBook = await jsonResponce.json();

            if (newBook) {
                navigate('/categories');
            }

            console.log(newBook);
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <section id="add-book" >
            <form id="ebook-form" method="POST" onSubmit={ebookSubmitHandler}>
                <fieldset>
                    <legend>Add e-book</legend>
                    <p className="field">
                        <label htmlFor="genre">Genre</label>
                        <span className="input">
                        <select name="genre" id="genre">
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
                        <span className="input">
                            <input type="text" name="title" id="title" placeholder="Title of the book" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="author">Author</label>
                        <span className="input">
                            <input type="text" name="author" id="author" placeholder="Author name" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="year">Year</label>
                        <span className="input">
                            <input type="text" name="year" id="year" placeholder="Year of publishing" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image link</label>
                        <span className="input">
                            <input type="text" name="image" id="image" placeholder="Image link" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <input type="text" name="description" id="description" placeholder="Description in few simple sentences..." />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="link">Download link</label>
                        <span className="input">
                            <input onClick={linkOnClickWarning} type="text" name="link" id="link" placeholder="Place download link" />
                            {linkWarning && <p>Only place links if you are an author of the book or the book has no copyright. Otherwise links will be removed.</p>}
                        </span>
                    </p>
                    <input id="register-button" type="submit" value="Add e-book!" />
                </fieldset>
            </form>
        </section>
    );
};

export default AddEbook;