const express = require('express')
const router = express.Router()
const { postAnwserController, getAnserController } = require('../controllers')

router.post('/postAnswer', postAnwserController)

router.get('/getAnswer', getAnserController)

module.exports = router
