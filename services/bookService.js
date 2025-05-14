const Book = require('../models/bookModel')
const mongoose = require('mongoose')

exports.findAll = () => Book.find()
//exports.findById = (id) => Book.findById(id)

exports.findById = (idOrUuid) => {
  if (mongoose.Types.ObjectId.isValid(idOrUuid)) {
    // Try finding by MongoDB _id first
    return Book.findOne({ $or: [{ _id: idOrUuid }, { uuid: idOrUuid }] })
  } else {
    // If not a valid ObjectId, fallback to UUID
    return Book.findOne({ uuid: idOrUuid })
  }
}

exports.create = (data) => {
  if (Array.isArray(data)) {
    return Book.insertMany(data)
  } else {
    return Book.create(data)
  }
}
exports.update = (id, data) => Book.findByIdAndUpdate(id, data, { new: true })
exports.remove = (id) => Book.findByIdAndDelete(id)
