const mongoose = require('mongoose')
const Schema = mongoose.Schema

const announcementSchema = new Schema({
    id: Number,
    title: {
        type: String,
        required: true,
    },
    content: {
        type: Object,
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
        type: Array,
        default: []
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

const Announcement = mongoose.model('announcements', announcementSchema)

module.exports = Announcement

export {}