const mongoose = require('mongoose')
const Schema = mongoose.Schema


const categorySchema = new Schema({
    name:{
    type:String,
    required:true
    
},
  subcat:{
    type:Schema.Types.ObjectId,
    ref:'subcat'
  }

}

,{ timestamps: false, versionKey: false});


const Cat = mongoose.model('cat', categorySchema)

module.exports = Cat