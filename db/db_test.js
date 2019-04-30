const md5 = require('blueimp-md5')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/zhipin_test', { useNewUrlParser: true })
const conn = mongoose.connection
conn.on('connected', () => {
    console.log('db connected')
})

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true }
})

const UserModel = mongoose.model('user', userSchema)

testSave = () => {
    const userModel = new UserModel({
        username: 'Mimi',
        password: md5('123'),
        type: 'God'
    })
    userModel.save(function(error, user) {
        console.log('save', error, user)
    })
}

testFind = () => {
    UserModel.find(function(error, users) {
        console.log('find', error, users)
    })

    UserModel.findOne({_id: '5cbd5bcbc71e7c2b44dd2e9e'}, function(error, user) {
        console.log('findOne', error, user)
    })
}

testUpdate = () => {
    UserModel.findByIdAndUpdate({_id: '5cbd5bbad256771930019616'}, {username: 'Jack'}, function(error, user) {
        console.log('update', error, user)
    })
}

testRemove = () => {
    UserModel.remove({_id: '5cbd5bbad256771930019616'}, function(error, data) {
        console.log('remove', error, data)
    })
}