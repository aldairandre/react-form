const express = require('express')
const router = express.Router()
const connection = require('../db/connection')

connection.connect()

router.get('/',(req,res) =>{
  connection.query('SELECT * FROM book',(error,results)=>{
    if(error){
      throw error
    }
    res.send(results.map(item => ({...item})))
  })
})