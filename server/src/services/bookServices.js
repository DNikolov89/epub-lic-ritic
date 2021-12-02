import Book from '../models/Book.js';

export const addBook = async (bookData) => await Book.create(bookData);

export const getAllByGenre = async (genre) => await Book.find({genre});

export const getOneBook = async (bookId) => await Book.findById(bookId);
