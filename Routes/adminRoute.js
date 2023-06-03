const express = require('express')
const bodyparser = require('body-parser')
const Route = express()



Route.use(bodyparser.json());
Route.use(bodyparser.urlencoded({ extended: true }))
Route.set('view engine','ejs')
Route.set('views', './views/admin-view');
Route.get('/',(req,res)=>{
    res.render("dashboard")
})
Route.get('/billing',(req,res)=>{
    res.render("billing")
})
Route.get('/about',(req,res)=>{
    res.render('about')
})

module.exports = Route