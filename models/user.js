const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
 
  
  email: {
    type: String,
    required:true
  },
  firstname:{
    type : String,
    required:true
  },
  lastname:{
    type : String,
    required:true
  },
  
  gender:{
    type: String,
    required:true
  },
  region:{
 type:String,
 required:true
  },
  national:{
      type:String,
      required:true
  },
  university:{
    type:String,
    required:true
  },
  major:{
    type:String,
    required:true
  },
  graduates:{
    type:String,
    required:true
  },
  GPA:{
    type:String,
    required:true
  },
  militarystatus:{
    type:String,
    required:true

  },
  status:{
    type:String,
    required:true
  },
  Resume: {
    type: Schema.Types.ObjectId,
    ref:'file'

  },
  Transcript: {
    type: Schema.Types.ObjectId,
    ref:'file'

  },
 



},{ timestamps: false, versionKey: false});

const User = mongoose.model('user', UserSchema)

module.exports = User