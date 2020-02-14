const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()
const User = mongoose.model('user')
const UserValidInput = require('../modules/createUserValidator')

// console.log(mongoose);

router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
  
 const { errors , isValid }  = UserValidInput(reqData)
 if(!isValid) return res.status(400).json(errors)
         const data = {
          
            email : reqData.email,
            firstname : reqData.firstname,
            lastname : reqData.lastname,
            gender : reqData.gender,
            region : reqData.region,
            national : reqData.national,
            university : reqData.university,
            major : reqData.major,
            graduates: reqData.graduates,
            GPA : reqData.grade,
            militarystatus : reqData.militarystatus,
            status : reqData.status,
            Resume : reqData.Resume,
            Transcript : reqData.Transcript
            
         
         
         
        }
        let result = await User.create(data)
        console.log(result)
        return res.json(result).status(201).end()
        
    })
       
    router.delete('/del/:_id', async (req,res)=>{
        const {_id} = req.params

       let result = await User.findByIdAndDelete(_id)
       console.log(result)
       return res.json(result).status(204)
    
    })

router.get('/', async (req, res, next) => {
    
    let test = await  User.find({}).populate('Resume').populate('Transcript')
    console.log(req.query)
    return res.json({data:test}).status(500)
})


router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await User.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})



module.exports = router;