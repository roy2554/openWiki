const mongoose = require('mongoose')
const Schema = mongoose.Schema

const communitySchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    ParentSchool: {
        SD_SCHUL_CODE: {
            type: String,
        }
    },
    ownerId: {
        type: Number,
        required: true,
    },
    communityName: {
        type: String,
        required: true,
    },
    communityDescription: {
        type: String,
        default: '',
    },
    isPrivate: {
        type: Boolean,
        default: false,
    },
})

const Community = mongoose.model('communities', communitySchema)

module.exports = Community

export {}