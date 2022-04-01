const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userId: Number,
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: ''
    },
    schoolName: {
        type: String,
        default: '',
    },
    joinedIn: {
        type: Array,
        default: []
    },
    joinedCommunity: {
        type: Object,
        default: {}
    },
    accessToken: {
        type: String,
        default: '',
    },
    apiKey: {
        type: String,
        default: ''
    },
    permission: {
        type: Number,
        default: 0
    },
    preference: {
        type: Object,
        default: {
            theme: 'dark',
        }
    },
    badges: {
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

const User = mongoose.model('users', userSchema)

module.exports = User

export {}