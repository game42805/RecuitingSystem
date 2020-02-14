const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ExpSchema = new Schema({
 
  lastposition: {
    type: String,
    required:true
    
  },
  Year:{
    type:String,
    required:true
  },
  Month:{
    type:String,
    required:true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref:'user'
    
  },
  Company:{
    type: String,
    required:true
  },
  needsalary:{
    type:Number,
    required:true
  },
  lastsalary:{
    type:Number,
    required:true
  }

},{ timestamps: false, versionKey: false});

const expSchema = mongoose.model('exp', ExpSchema)

module.exports = expSchema