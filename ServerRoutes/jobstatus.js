const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()
const jobstat = mongoose.model('jobstatus')
const JobstatValid = require('../modules/createJobStatusValidator')
// console.log(mongoose);

router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
  
    const {errors, isValid } = JobstatValid (reqData)
    if(!isValid) return res.status(400).json(errors)
         const data = {
          
          status : reqData.status,
           user : reqData.user,
           admin :reqData.admin,
           job :reqData.job
        }
        let result = await jobstat.create(data)
        console.log(result)
        return res.json(result).status(201).end()
        
    })
       
    router.delete('/del/:_id', async (req,res)=>{
        const {_id} = req.params

       let result = await jobstat.findByIdAndDelete(_id)
       console.log(result)
       return res.json(result).status(204)
    
    })

router.get('/', async (req, res, next) => {
    
    let test = await  jobstat.find({}).populate('user').populate('admin').populate({ path:'job',populate:({path:'category',populate:{path:'subcat'}})})
    return res.json(test).status(500)
})

router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await jobstat.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})


module.exports = router;