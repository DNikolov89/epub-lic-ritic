import Book from '../models/Book.js';

export const addBook = async (bookData) => await Book.create(bookData);

export const getAllByGenre = async (genre) => await Book.find({ genre });

export const getOneBook = async (bookId) => await Book.findById(bookId);

export const deleteOne = async (bookId) => await Book.findByIdAndDelete(bookId);

export const editBook = async (bookId, bookData) => await Book.findByIdAndUpdate(bookId, bookData);

export const getLastTree = async () => await Book.find().sort({'createdAt': -1}).limit(3);

