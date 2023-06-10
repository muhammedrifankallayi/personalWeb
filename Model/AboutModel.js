const mongoose = require('mongoose')


const AboutSchema = new mongoose.Schema({
    Description:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model('About',AboutSchema)