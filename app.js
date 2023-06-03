const express = require('express')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
const route = require('./Routes/route')
const adminRoute = require('./Routes/adminRoute')
const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/mhdrifan').then(()=>{
    console.log('connected');
}).catch(()=>{
    console.log('MongoDB connecton error!');
})

const path = require('path');

// ...

adminRoute.use(express.static(path.resolve(__dirname, 'public/admin')));


route.use(express.static('public'))



// route.set('view engine','ejs')
// route.set('views','views')
app.use('/',route)

app.use('/admin',adminRoute)


app.listen(4000,()=>{
    console.log('server loading...');
})


