import { Router } from 'express';

import * as bookServices from '../services/bookServices.js';

const router = Router();

router.post('/:userId/addebook', async (req, res) => {

    let bookData = req.body;
    let { userId } = req.params
    
    try {
        let newBook = await bookServices.addBook(bookData, userId);
        
        if (!newBook.Error._message) {
            res.json(newBook);
        } else {
            throw new Error({ message: 'Could not create new book record.' })
        };

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: "error", message: err.message });
    };

});

router.get('/my-ebooks/:userId', async (req, res) => {

    let { userId } = req.params;

    try {

        let personalBooks = await bookServices.getPersonalBooks(userId);

        res.json(personalBooks);

    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    };

});

router.get('/classic', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('classic');

        if (!books) {
            throw new Error('There are no classic books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});

router.get('/science', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('science');

        if (!books) {
            throw new Error('There are no science books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message })
    };

});

router.get('/history', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('history');

        if (!books) {
            throw new Error('There are no classic books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message })
    };

});

router.get('/biography', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('biography');

        if (!books) {
            throw new Error('There are no biography books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message })
    };

});

router.get('/adventure', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('adventure');

        if (!books) {
            throw new Error('There are no adventure books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message })
    };

});

router.get('/other', async (req, res) => {

    try {

        let books = await bookServices.getAllByGenre('other');

        if (books === []) {

            throw new Error('There are no other books in this section.')
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message })
    };

});

router.get('/last-three-books', async (req, res) => {

    try {
        let books = await bookServices.getLastTree();

        if (books === []) {
            throw new Error('Could not get the last three books');
        };

        res.json(books);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});

router.get('/:bookCategory/:bookId', async (req, res) => {

    let { bookId } = req.params;

    try {

        let book = await bookServices.getOneBook(bookId);

        res.json(book);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});

router.delete('/:bookId/delete', async (req, res) => {

    let bookId = req.body;

    try {

        let confirm = await bookServices.deleteOne(bookId);

        res.send(confirm);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});

router.put('/:bookId/edit', async (req, res) => {

    let bookData = req.body;
    let bookId = req.params.bookId;

    try {

        let editedBook = await bookServices.editBook(bookId, bookData);

        res.json(editedBook);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});


router.post('/:bookId/vote', async (req, res) => {

    let { bookId, userId, vote } = req.body;

    try {

        let book = await bookServices.getOneBook(bookId);

        book.votes.push({ votedUser: userId, vote });

        book.save();

        res.json('Voted successfully!');

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };

});

router.post('/search/:data', async (req, res) => {

    try {

        let { data } = req.body;

        let result = await bookServices.getAllByData(data);
        
        if (result === []) {
            throw new Error('Could not fetch any books by this criteria.');
        };

        res.json(result);

    } catch (err) {
        console.log(err);
        res.status(404).json({ type: 'error', message: err.message });
    };
    
});

export default router;