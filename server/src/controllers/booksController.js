import { Router } from 'express';

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
    console.log(bookId)
    try {
        let book = await bookServices.getOneBook(bookId);
        console.log(book)
        res.json(book);
    } catch (err) {
        console.log(err);
    }
    
})

export default router;