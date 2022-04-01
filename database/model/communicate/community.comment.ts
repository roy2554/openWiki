const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommunityCommentSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    target: {
        community: {
            id: {
                type: Number,
                required: true,
            },
        },
        post: {
            id: {
                type: Number,
                required: true,
            },
        },
    },
    author: {
        id: {
            type: Number,
            required: true,
        },
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

const CommunityComment = mongoose.model('communityComment', CommunityCommentSchema)

module.exports = CommunityComment

export {}