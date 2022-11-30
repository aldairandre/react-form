const express = require('express')
const mysql = require('mysql2')

const app = express()

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'Books'
})

connection.connect()

app.get('/books',(req,res) =>{
  connection.query('SELECT * FROM book',(error,results)=>{
    if(error){
      throw error
    }
    res.send(results.map(item => ({...item})))
  })
})

app.listen(9001,'localhost',() => console.log('Listening on port 9001 🚀'))