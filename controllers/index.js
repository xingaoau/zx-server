const { AnswerModel } = require('../models/models')

exports.postAnwserController = (req, res, next) => {
  const { answer, type } = req.body

  AnswerModel.findOne({ answer, type }, (err, doc) => {

    if(doc) {
      res.json({ code: 1, msg: 'error' })
    } else {

      new AnswerModel({ answer, type }).save( (err, doc) => {
        const data = { answer, type, _id: doc._id }
        res.json({ code: 0, data })

      })
    }

  })
}

exports.getAnserController = (req, res, next) => {
  const { type } = req.query

  AnswerModel.aggregate([
    [
      { $match: { "type": parseInt(type) } },
      { $sample: { size: 1 } }
    ]], function( err, doc ) {
  
      if ( err )
        res.json({ code: 1, msg: 'error' })

      res.json({ code: 0, doc })
  })
}