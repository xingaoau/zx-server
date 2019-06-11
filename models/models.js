const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zx', { useNewUrlParser: true })
const conn = mongoose.connection
conn.on('connected', () => {
    console.log('db connected')
})

// create schema
const answerSchema = mongoose.Schema({
    answer: { type: String, required: true },
    type: {type: Number, required: true}
})
// create model/table
const AnswerModel = mongoose.model('answer', answerSchema)
// expose model
exports.AnswerModel = AnswerModel
