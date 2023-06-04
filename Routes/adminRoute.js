const express = require('express')
const bodyparser = require('body-parser')
const Route = express()



Route.use(bodyparser.json());
Route.use(bodyparser.urlencoded({ extended: true }))
Route.set('view engine','ejs')
Route.set('views', './views/admin-view');


// rendering admin side pages

Route.get('/',(req,res)=>{
    res.render("messages")
})
Route.get('/orders',(req,res)=>{
    res.render("orders")
})
Route.get('/about',(req,res)=>{
    res.render('about')
    
})
Route.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})

module.exports = Route