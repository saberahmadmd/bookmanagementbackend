const fs = require('fs')
const csv = require('csv-parser')
const Book = require('../models/bookModel')

exports.importBooksFromCSV = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' })
  }

  const filePath = req.file.path
  const addedBooks = []
  const errorRows = []
  const savePromises = []
  let rowIndex = 1

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (row) => {
      rowIndex++
      const { title, author, publishedYear } = row

      if (!title || !author || isNaN(parseInt(publishedYear))) {
        errorRows.push(`Row ${rowIndex}: Invalid data`)
        return
      }

      const book = new Book({
        title,
        author,
        publishedYear: parseInt(publishedYear)
      })

      const savePromise = book.save()
        .then(saved => addedBooks.push(saved))
        .catch(err => errorRows.push(`Row ${rowIndex}: ${err.message}`))

      savePromises.push(savePromise)
    })
    .on('end', async () => {
      try {
        await Promise.all(savePromises)
        fs.unlinkSync(filePath)
        res.status(200).json({
          addedBooksCount: addedBooks.length,
          errorRows
        })
      } catch (err) {
        fs.unlinkSync(filePath)
        res.status(500).json({ message: 'Failed to save some books', error: err.message })
      }
    })
    .on('error', (err) => {
      fs.unlinkSync(filePath)
      res.status(500).json({ message: 'Error parsing CSV', error: err.message })
    })
}
