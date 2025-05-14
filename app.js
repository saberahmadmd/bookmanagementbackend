const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bookRoutes = require('./routes/bookRoutes')
const errorHandler = require('./middleware/errorHandler')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/', bookRoutes)

app.use(errorHandler)


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected successfully')

    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  })
  .catch(err => console.error('MongoDB connection failes', err))

module.exports = app