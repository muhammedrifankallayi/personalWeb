const express = require('express')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
const route = require('./Routes/route')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/mhdrifan').then(()=>{
    console.log('connected');
}).catch(()=>{
    console.log('MongoDB connecton error!');
})

app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','views')
// route.set('view engine','ejs')
// route.set('views','views')
app.use('/',route)


app.listen(4000,()=>{
    console.log('server loading...');
})


