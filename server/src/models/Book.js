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
    },
    genre: {
        type: String,
        required: true
    },
    image: {
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
            votedUser:
            {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            },
            vote: {
                type: Number,
                default: 0
            }
        }
    ],
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

bookSchema.index({'$**': 'text'});

const Book = mongoose.model('Book', bookSchema);

export default Book;