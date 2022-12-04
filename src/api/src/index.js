const express = require('express')
const app = express()
const morgan = require('morgan')
const books = require('./routes/books')

app.use(morgan('dev'))

app.use('/books',books)

app.use((req,res,next)=>{
  const error = new Error('Nothing Here')
  error.status = 404
  next(error)
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500)
  return res.send({
    erro : {
      message : error.message
    }
  })
})

app.listen(9001,'localhost',() => console.log('Listening on port http://localhost:9001 🚀'))