const express = require('express')
const bodyparser = require('body-parser')
const About = require('../Model/AboutModel')

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
Route.get('/about',async(req,res)=>{
    const data = await About.find() 
    res.render('about',{data})
    
})
Route.get('/portfolio',(req,res)=>{
    res.render('portfolio')
})
Route.get('/addText',(req,res)=>{
    res.render('addText')
})
Route.get('/editAbout',async(req,res)=>{
    const id = req.query.id
    const data = await About.findById({_id:id})
    res.render('editAbout',{data})
})
Route.get("/showAbout",async(req,res)=>{
    const id = req.query.id
    const data = await About.findById({_id:id})
    res.render('showAbout',{data})
})


// database related routes

Route.post('/addText',Controller.addTextAbout);
Route.post('/Editabout',Controller.EditData)
Route.get('/delete',Controller.DeleteAbout)


module.exports = Route