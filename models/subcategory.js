const mongoose = require('mongoose')
const Schema = mongoose.Schema


const subcategorySchema = new Schema({
 
    name:{
    type:String,
    required:true
  }

}

,{ timestamps: false, versionKey: false});


const SubCat = mongoose.model('subcat', subcategorySchema)


module.exports = SubCat