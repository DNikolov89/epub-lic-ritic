import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    votes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    rating: {
        type: Number,
        default: 0
    },
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

const Book = mongoose.model('Book', bookSchema);

export default Book;