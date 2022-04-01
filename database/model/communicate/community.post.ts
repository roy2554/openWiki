const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommunityPostSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    community: {
        id: {
            type: Number,
            required: true,
        }
    },
    author: {
        id: {
            type: Number,
            required: true,
        },
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: {
        count: {
            type: Number,
            default: 0,
        },
        last_updated: {
            type: Date,
            default: Date.now,
        }
    },
    unlikes: {
        count: {
            type: Number,
            default: 0,
        },
        last_updated: {
            type: Date,
            default: Date.now,
        }
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

const CommunityPost = mongoose.model('communityPosts', CommunityPostSchema)

module.exports = CommunityPost

export {}