const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileSchema = new Schema({


    fieldname:{
       type:String
   },
   path:{
       type:String
   },
   originalname:{
    type:String
   },
   encoding:{
    type:String
   },
    mimetype: {
        type:String
    },
    destination:{
        type:String
    } ,
    filename: {
        type:String
    },
    size:{
        type:Number
    }
    
    

})

const File = mongoose.model('file',FileSchema)


module.exports = File