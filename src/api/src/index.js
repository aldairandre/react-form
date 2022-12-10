require('dotenv').config()
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

app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,() => console.log(`Listening on port http://localhost:${process.env.SERVER_PORT} 🚀`))