const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Cat = mongoose.model('cat')
const CatValid = require ('../modules/createCateValidator')

// console.log(mongoose);


router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
    
    const {errors, isValid } = CatValid (reqData)
    if(!isValid) return res.status(400).json(errors)
        const data = {
            name: reqData.cat,
            subcat:reqData.subcat
        }
        
         let result = await Cat.create(data)
         console.log(result)
         return res.json(result).status(201).end()
     
    })            
    router.delete('/del/:_id', (req,res,next) =>{
        const{ _id }= req.params 
        Cat.findOneAndRemove({ _id : _id }).then(ord =>{
            return res.status(200).json(ord)
        }).catch(err => {
            return res.json(200);
        })
    
    })
    router.get('/', async (req, res, next) => {
      
     let result = await  Cat.find({}).populate('subcat')
        return res.json(result).status(500)
    })
    
    
router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await Cat.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})

  
  module.exports = router;
  