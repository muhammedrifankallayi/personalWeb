const About = require('../Model/AboutModel')




const addTextAbout = async(req,res)=>{
    try {
        const text = req.body.about
        const head = req.body.heading
        const data = new About({
            Description:text,
            Heading:head
        })
        const textdata = data.save()
        if(textdata){
            res.redirect('/admin/about');
        }

    } catch (error) {
        console.log(error.message);
    }
}

const EditData = async(req,res)=>{
    try {
        const text = req.body.about
        const head = req.body.heading
        const id   = req.body.id
        await About.findOneAndUpdate({_id:id},{$set:{Heading:head,Description:text}});
        res.redirect('/admin/about');
    } catch (error) {
        console.log(error.message);
    }
}

// to delete 

const DeleteAbout = async(req,res)=>{
    try {
        const id = req.query.id
        await About.findByIdAndDelete({_id:id});
    } catch (error) {
        console.log(error.message);
    }
}





module.exports={
    addTextAbout,
    EditData,
    DeleteAbout
}