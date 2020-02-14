const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobsSchema = new Schema({
 
  
  jobname: {
    type: String,
    required:true
    
  },
  salary_min: {
    type: Number,
    required:true
    
  },
  salary_max: {
    type: Number,
    required:true
    
  },
  level: {
    type: String,
    required:true
    
  },
  status:{
   type:Boolean,
   default:false
  },
  category: {
    type: Schema.Types.ObjectId,
    ref:'cat'

  },
  
  createdAt: {type: Date, default: Date.now }

},{ timestamps: false, versionKey: false});

const jobS = mongoose.model('job', jobsSchema)

module.exports = jobS