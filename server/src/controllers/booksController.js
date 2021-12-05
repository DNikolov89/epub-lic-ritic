import { Router } from 'express';
import mongoose from 'mongoose';

import * as bookServices from '../services/bookServices.js'

const router = Router();

router.post('/addebook', async (req, res) => {

    let bookData = req.body;
    console.log(bookData);

    try {
        let newBook = await bookServices.addBook(bookData);

        if (newBook) {
            res.json(newBook);
        }
    } catch (err) {
        console.log(err)
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
    book.votes.push({userId, vote});
    book.save();

    console.log(book)

    res.json({ok: true})
})

export default router;