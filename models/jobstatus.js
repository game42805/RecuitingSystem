const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobStatusSchema = new Schema({
 
  
  status: {
    type: String,
    required:true
    
  },
  Date: {
    type: Date,
    default:Date.now
    
  },
  user:{
  type:Schema.Types.ObjectId,
  ref:'user'
  },
  admin:{ 
    type:Schema.Types.ObjectId,
    ref:'admin'
  },
  job:{
    type:Schema.Types.ObjectId,
  ref:'job'
  }
   
  

},{ timestamps: false, versionKey: false});

const jobStatus = mongoose.model('jobstatus', jobStatusSchema)

module.exports = jobStatus