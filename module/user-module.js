const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email : { type: String, required: true}
})

module.exports = mongoose.model('User', userShema);