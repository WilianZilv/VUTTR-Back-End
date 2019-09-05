const mongoose = require('mongoose')

const Tool = new mongoose.Schema(
    {
        title: {
            required: true,
            type: String
        },
        link: {
            required: true,
            type: String
        },
        description: String,
        tags: [String]
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Tool', Tool)
