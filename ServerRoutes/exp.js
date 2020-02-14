const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()
const exp = mongoose.model('exp')
const ExpValid = require ('../modules/CreateExpValidator')
// console.log(mongoose);

router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
  
    const {errors, isValid } = ExpValid (reqData)
    if(!isValid) return res.status(400).json(errors)

         const data = {
         
            lastposition : reqData.lastposition,
            Year : reqData.Year,
            Month :reqData.Month,
            Company : reqData.Company,
            needsalary : reqData.needsalary,
            lastsalary : reqData.lastsalary,
            user : reqData.user
           
         
         
        }
        
        let result = await exp.create(data)
        console.log(result)
        return res.json(result).status(201).end()
    })
       
    router.delete('/del/:_id', async (req,res)=>{
        const {_id} = req.params

       let result = await exp.findByIdAndDelete(_id)
       return res.json(result).status(204)
    
    })

router.get('/', async (req, res, next) => {
    
    let test = await  exp.find({}).populate('user')
    return res.json(test).status(500).end()
})


router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await exp.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})












module.exports = router;