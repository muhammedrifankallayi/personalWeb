const mongoose = require('mongoose')


const AboutSchema = new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Heading:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model('About',AboutSchema)