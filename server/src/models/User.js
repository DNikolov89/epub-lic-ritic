import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import config from '../config/config.js'

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

userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, config.SALT_ROUNDS)
        .then((hash) => {
            this.password = hash;

            return next();
        })
        .catch(err => {
            console.log(`User.js: ${err}`)
        })
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model('User', userSchema);

export default User;