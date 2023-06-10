const express = require('express')
const bodyparser = require('body-parser')

const Controller = require('../controller/adminControl')

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
Route.get('/addText',(req,res)=>{
    res.render('addText')
})
Route.get('/editAbout',(req,res)=>{
    res.render('editAbout')
})


// database related routes

Route.post('/addText',Controller.addTextAbout);


module.exports = Route