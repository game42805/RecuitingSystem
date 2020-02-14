const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()
const Job = mongoose.model('job')
const JobValid = require('../modules/createJobValidator')

// console.log(mongoose);

router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
  const  {errors , isValid } = JobValid(reqData)
  if(!isValid) return res.status(400).json(errors)
         const data = {
          
        jobname : reqData.jobname,
        salary_min : reqData.salary_min,
        salary_max : reqData.salary_max,
        level : reqData.level,
        status : reqData.status,
        category : reqData.cat,
         
         
        }
       
        let result = await Job.create(data)
        console.log(result)
        return res.json(result).status(201).end()
    })
       
    

router.get('/', async (req, res, next) => {
    
    let result = await  Job.find({}).populate({path:'category',populate:{path:'subcat'}})
    return res.json(result).status(500)
})



router.delete('/del/:_id', (req,res,next) =>{
    const{ _id }= req.params 
    Job.findOneAndRemove({ _id : _id }).then(ord =>{
        return res.status(200).json(ord)
    }).catch(err => {
        return res.json(200);
    })

})

router.put('/open/:_id', async (req,res,next) =>{
     const {_id} = req.params
    const data={
        $set:{
            status:true
        }
    }
     let result = await Job.findByIdAndUpdate(_id, data)
    console.log(result)
    return res.json(result).status(400)
})

router.put('/close/:_id', async (req,res,next) =>{
    const {_id} = req.params
   const data={
       $set:{
           status:false
       }
   }
    let result = await Job.findByIdAndUpdate(_id, data)
   console.log(result)
   return res.json(result).status(400)
})


router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await Job.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})




module.exports = router;