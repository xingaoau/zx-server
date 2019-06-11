const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zx', { useNewUrlParser: true })
const conn = mongoose.connection
conn.on('connected', () => {
    console.log('db connected')
})

const answerSchema = mongoose.Schema({
    answer: { type: String, required: true },
    type: {type: Number, required: true}
})

const AnswerModel = mongoose.model('answer', answerSchema)

const answers = [
    {answer: 'It is certain', type: 1},
    {answer: 'It is decidedly so', type: 1},
    {answer: 'Without a doubt', type: 1},
    {answer: 'Yes definitely', type: 1},
    {answer: 'You may rely on it', type: 1},
    {answer: 'As I see it, yes', type: 1},
    {answer: 'Most likely', type: 1},
    {answer: 'Outlook good', type: 1},
    {answer: 'Yes', type: 1},
    {answer: 'Signs point to yes', type: 1},
    {answer: 'Reply hazy try again', type: 2},
    {answer: 'Ask again later', type: 2},
    {answer: 'Better not tell you now', type: 2},
    {answer: 'Cannot predict now', type: 2},
    {answer: 'Concentrate and ask again', type: 2},
    {answer: 'Do not count on it', type: 3},
    {answer: 'My reply is no', type: 3},
    {answer: 'My sources say no', type: 3},
    {answer: 'Outlook not so good', type: 3},
    {answer: 'Very doubtful', type: 3}
]

testSave = () => {
    AnswerModel.collection.insert(answers, function(err, doc) {
        if(err) {
            return console.log(err)
        } else {
            console.log('save')
        }
    })
    // const answerModel = new AnswerModel({
    //     answer: 'It is certain',
    //     type: 1
    // })
    // answerModel.save(function(error, doc) {
    //     console.log('save', error, doc)
    // })
}

testFind = () => {
    AnswerModel.find(function(error, doc) {
        console.log('find', error, doc)
    })

    // AnswerModel.findOne({_id: '5cfded3aa26e0f1aa8e133ac'}, function(error, doc) {
    //     console.log('findOne', error, doc)
    // })
}

testUpdate = () => {
    AnswerModel.findOneAndUpdate({_id: '5cfded4fd1abfe2ffcac8336'}, {answer: 'my name is kitty'}, function(error, doc) {
        console.log('update', error, doc)
    })
}

testRemove = () => {
    AnswerModel.deleteMany({type: 3}, function(error, doc) {
        console.log('remove', error, doc)
    })
}

testSave()
// testFind()
// testUpdate()
// testRemove()
