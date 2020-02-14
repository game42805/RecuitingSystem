const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Subcat = mongoose.model('subcat')
const subcatValid = require ('../modules/createSubcatValidator')



router.post('/add', async (req, res) => {
    const reqData = req.body
    console.log(reqData)
  
     const {errors, isValid } = subcatValid (reqData)
     if(!isValid) return res.status(400).json(errors)
     let chValid = await Subcat.findOne({name:reqData.subcat})
      if(chValid){
        return res.status(400).json({
            name: 'Sub-Category already exists'
          })
      }else{
        const data = {
            name: reqData.subcat
        }
        let result = await Subcat.create(data)
        return res.json(result).status(201).end()

    }
     
    })        
    router.get('/', async (req, res, next) => {
    
        let test = await  Subcat.find({})
        return res.json(test).status(500)
    })    

    
router.delete('/del/:_id', (req,res,next) =>{
    const{ _id }= req.params 
    Subcat.findOneAndRemove({ _id : _id }).then(ord =>{
        return res.status(200).json(ord)
    }).catch(err => {
        return res.json(200).json(err)
    })

})

router.put('/edit/:_id', async (req,res,next) =>{
    const payload = req.body
      const {_id} = req.params
    let result = await Subcat.findByIdAndUpdate(_id, {$set: payload})
    console.log(result)
    return res.json(result).status(400)
})


module.exports = router