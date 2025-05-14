const bookService = require('../services/bookService')

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.findAll()
    console.log(books)
    res.status(200).json(books)
  }
  catch (error) {
    next(error)
  }
}

exports.getBookById = async (req, res, next) => {
  try {
    const book = await bookService.findById(req.params.id)
    if (!book) {
      return res.status(404).json({ message: 'Book not Found' })
    }
    console.log(book)
    res.status(200).json(book)
  }
  catch (error) {
    next(error)
  }
}

exports.createBook = async (req, res, next) => {
  try {
    const book = await bookService.create(req.body)
    console.log(book)
    res.status(200).json(book)
  }
  catch (error) {
    next(error)
  }
}

exports.updateBook = async (req, res, next) => {
  try {
    const book = await bookService.update(req.params.id, req.body)
    if (!book) {
      return res.status(404).json({ message: 'Book not Found' })
    }
    console.log(book)
    res.status(200).json(book)
  }
  catch (error) {
    next(error)
  }
}

exports.deleteBook = async (req, res, next) => {
  try {
    const deleted = await bookService.remove(req.params.id)
    if (!deleted) {
      return res.status(404).json({ message: 'Book not FOund' })
    }

    console.log(deleted)
    res.status(200).json({ message: 'Book deleted successfully' })
  }
  catch (error) {
    next(error)
  }
}