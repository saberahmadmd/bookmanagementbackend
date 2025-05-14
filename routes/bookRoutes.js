const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController')
const importController = require('../controllers/importController')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

router.get('/books', bookController.getAllBooks)
router.get('/books/:id', bookController.getBookById)
router.post('/books', bookController.createBook)
router.put('/books/:id', bookController.updateBook)
router.delete('/books/:id', bookController.deleteBook)

router.post('/books/import', upload.single('file'), importController.importBooksFromCSV)

module.exports = router