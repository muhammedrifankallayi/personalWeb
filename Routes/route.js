const express = require('express')
const bodyparser = require('body-parser')
const Route = express()



Route.use(bodyparser.json());
Route.use(bodyparser.urlencoded({ extended: true }))

Route.get('/',(req,res)=>{
    res.render("index")
})
Route.get('/ssh',(req,res)=>{
    res.render('styles')
})

module.exports=Route
