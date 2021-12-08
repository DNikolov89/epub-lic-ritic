import './Details.css';

import { useEffect, useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { SERVER_MAIN_URL } from '../../../constants';
import AuthContext from '../../../contexts/AuthContext';
import * as bookService from '../../../services/bookService';


function Details() {

    let [book, setBook] = useState({});
    let [votes, setVotes] = useState(0);
    let [isOwner, setIsOwner] = useState(false);
    let [userHasAlreadyVoted, setUserHasAlreadyVoted] = useState(false);
    let { bookId, bookCategory } = useParams();
    let { loggedUserData } = useContext(AuthContext);

    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${SERVER_MAIN_URL}/ebooks/${bookCategory}/${bookId}`)
            .then(res => res.json())
            .then(res => {
                setBook(res);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {

        if (book.votes) {

            let votedUser = book.votes?.find(vote => vote.votedUser === loggedUserData._id);

            if (votedUser) {
                setUserHasAlreadyVoted(true);
            };

            let calcVotes = ((book.votes?.reduce((a, b) => a + b.vote, 0)) / book.votes.length).toFixed(2);
            setVotes(calcVotes);
        }
    }, [book, votes]);

    if (!isOwner) {
        if (loggedUserData._id === book._ownerId) {
            setIsOwner(true);
        };
    };


    const onClickDeleteHandler = async (e) => {
        e.preventDefault();

        await bookService.deleteOneBook(bookId);

        navigate(`/categories/${book.genre}`);
    };

    const onClickVoteHandler = (e) => {
        e.preventDefault();

        let vote = e.target.value;

        let loggedUserId = loggedUserData._id;

        bookService.vote(bookId, loggedUserId, vote)
            .then(res => console.log(res))
            .catch(err => console.log(err))


        e.currentTarget.parentNode.innerHTML = "<h6>Thank you</h6>";

    };

    const votingStars = () => {
        return (
            < div className="txt-center">
                <form >
                    <div className="rating">
                        <input onClick={onClickVoteHandler} id="star5" name="star" type="radio" value="5" className="radio-btn hide" />
                        <label for="star5">☆</label>
                        <input onClick={onClickVoteHandler} id="star4" name="star" type="radio" value="4" className="radio-btn hide" />
                        <label for="star4">☆</label>
                        <input onClick={onClickVoteHandler} id="star3" name="star" type="radio" value="3" className="radio-btn hide" />
                        <label for="star3">☆</label>
                        <input onClick={onClickVoteHandler} id="star2" name="star" type="radio" value="2" className="radio-btn hide" />
                        <label for="star2">☆</label>
                        <input onClick={onClickVoteHandler} id="star1" name="star" type="radio" value="1" className="radio-btn hide" />
                        <label for="star1">☆</label>
                        <div className="clear"></div>
                    </div>
                </form>
            </div>
        );
    };


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
                <h5>Votes: {isNaN(votes) ? 0 : votes}</h5>
            </div>

            {isOwner &&
                <div id="details-button-wrapper">
                    <div>
                        <Link to={`/categories/${book.genre}/${bookId}/edit`}>
                            <button id="edit-button">Edit</button>
                        </Link>
                        <button onClick={onClickDeleteHandler} id="delete-button">Delete</button>
                    </div>
                </div>
            }

            {!isOwner && userHasAlreadyVoted && <div>Thank you for your vote!</div>}
            {!isOwner && !userHasAlreadyVoted && votingStars()}
        </div >
    );
};

export default Details;