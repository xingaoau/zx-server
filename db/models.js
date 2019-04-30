const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zhipin', { useNewUrlParser: true })
const conn = mongoose.connection
conn.on('connected', () => {
    console.log('db connected')
})

// create schema
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    header: { type: String },
    post: { type: String },
    info: { type: String },
    company: { type: String },
    salary: { type: String }
})
// create model/table
const UserModel = mongoose.model('user', userSchema)
// expose model
exports.UserModel = UserModel
