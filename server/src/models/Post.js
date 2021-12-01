import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;