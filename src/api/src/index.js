const express = require('express')
const app = express()
const books = require('./routes/books')

app.use('/books',books)

app.listen(9001,'localhost',() => console.log('Listening on port http://localhost:9001 🚀'))