const About = require('../Model/AboutModel')




const addTextAbout = async(req,res)=>{
    try {
        const text = req.body.about
        const data = new About({
            Description:text
        })
        const textdata = data.save()
        if(textdata){
            res.redirect('/admin/about');
        }

    } catch (error) {
        console.log(error.message);
    }
}





module.exports={
    addTextAbout
}