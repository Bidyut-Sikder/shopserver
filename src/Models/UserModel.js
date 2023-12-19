

const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    otp: { code: { type: String, required: true } }

})








const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel

















