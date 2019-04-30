const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/models')

const md5 = require('blueimp-md5')
const filter = { password: 0, __v: 0 }


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.post('/register', function(req, res) {
  const { username, password, type } = req.body

  UserModel.findOne({ username }, (err, doc) => {
    if(doc) {
      res.send({ code: 1, msg: 'user exists' })
    } else {
      new UserModel({ username, password: md5(password), type }).save( (err, doc) => {
        const data = { username, type, _id: doc._id }
        res.cookie('userid', doc._id, { maxAge: 1000*60*60*24*7 })
        res.send({ code: 0, data })
      })
    }
  })
})

router.post('/login', function(req, res) {
  const { username, password } = req.body

  UserModel.findOne({ username, password: md5(password) }, filter, (err, doc) => {
    if(doc) {
      res.cookie('userid', doc._id, { maxAge: 1000*60*60*24*7 })
      res.send({ code: 0, doc })
    } else {
      res.send({ code: 1, msg: 'user does not exists' })
    }
  })
})

module.exports = router
