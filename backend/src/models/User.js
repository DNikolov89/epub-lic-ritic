import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    uploadedBooks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Book'
        }
    ],
    votedBooks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Book'
        }
    ],
    comentedBooks: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Book'
        }
    ],
    posts: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

const User = mongoose.model('User', userSchema);

export default User;