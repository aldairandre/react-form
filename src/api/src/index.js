const express = require('express')
const app = express()
const connection = require('./db/connection')

app.get('/books',(req,res) =>{
  connection.query('SELECT * FROM book',(error,results)=>{
    if(error){
      throw error
    }
    res.send(results.map(item => ({...item})))
  })
})

app.listen(9001,'localhost',() => console.log('Listening on port http://localhost:9001 🚀'))