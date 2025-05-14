const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const bookSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuidv4,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedYear: {
    type: Number,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Book', bookSchema)
