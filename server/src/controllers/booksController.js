import { Router } from 'express';

import * as bookServices from '../services/bookServices.js';

const router = Router();

router.post('/:userId/addebook', async (req, res) => {

    let bookData = req.body;
    let { userId } = req.params

    try {

        let newBook = await bookServices.addBook(bookData, userId);
        
        if (newBook) {
            res.json(newBook);
        } else {
            throw new Error({ message: 'Could not create new book record.' })
        };

    } catch (err) {
        console.log(err.message);
        res.status(404).json({type: "error", message: "Could not create new book record."});
    };

});

router.get('/my-ebooks/:userId', async (req, res) => {

    let { userId } = req.params;

    try {

        let personalBooks = await bookServices.getPersonalBooks(userId);

        res.json(personalBooks);

    } catch (err) {
        res.status(404).json({ err });
    };
});

router.get('/classic', async (req, res) => {

    let books = await bookServices.getAllByGenre('classic');

    res.json(books);
});

router.get('/science', async (req, res) => {

    let books = await bookServices.getAllByGenre('science');

    res.json(books);
});

router.get('/history', async (req, res) => {

    let books = await bookServices.getAllByGenre('history');

    res.json(books);
});

router.get('/biography', async (req, res) => {

    let books = await bookServices.getAllByGenre('biography');

    res.json(books);
});

router.get('/adventure', async (req, res) => {

    let books = await bookServices.getAllByGenre('adventure');

    res.json(books);
});

router.get('/other', async (req, res) => {

    let books = await bookServices.getAllByGenre('other');

    res.json(books);
});

router.get('/last-tree-books', async (req, res) => {
    let books = await bookServices.getLastTree();

    res.json(books);
});

router.get('/:bookCategory/:bookId', async (req, res) => {
    let { bookId } = req.params;

    try {
        let book = await bookServices.getOneBook(bookId);

        res.json(book);
    } catch (err) {
        console.log(err);
    }
});

router.delete('/:bookId/delete', async (req, res) => {
    let bookId = req.body;

    try {
        let confirm = await bookServices.deleteOne(bookId);
        res.send(confirm);
    } catch (err) {
        console.log(err);
    }
});

router.put('/:bookId/edit', async (req, res) => {
    let bookData = req.body;
    let bookId = req.params.bookId;

    let editedBook = await bookServices.editBook(bookId, bookData);

    res.json(editedBook);
});


router.post('/:bookId/vote', async (req, res) => {
    let { bookId, userId, vote } = req.body;

    let book = await bookServices.getOneBook(bookId);
    book.votes.push({ votedUser: userId, vote });
    book.save();

    res.json({ ok: true })
});

router.post('/search/:data', async (req, res) => {
    try {
        let { data } = req.body;

        let result = await bookServices.getAllByData(data);

        res.json(result);
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});



export default router;