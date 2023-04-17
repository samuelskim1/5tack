const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        username: {
            type: String,
            required: true,
            index: { unique: true }
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password_digest: {
            type: String,
            required: true
        },
        session_token: {
            type: String,
            required: true,
            index: { unique: true }
        },
        posts: {
            title: {
                type: String,
            required: true
            },
            description: {
                type: String
            },
            timestamps: true
        },
    }, {
        timestamps: true
})

module.exports = mongoose.model('User', userSchema);
