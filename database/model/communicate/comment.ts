const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorId: {
        type: Number,
        required: true,
    },
    upDownThumbs: {
        type: Array,
        default: [0, 0]
    },
    comments: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
})

// const Comment = mongoose.model('comments', userSchema)

module.exports = commentSchema

export {}