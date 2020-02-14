const express = require('express');
const router = express.Router();
const multer = require('multer')
const mongoose = require('mongoose')
const Files = mongoose.model('file')
const fs = require('fs')
const path = require('path')

var uploadRe = multer({

    storage:multer.diskStorage({
        destination: function (req, file, cb) {
            // ใช้งาน path module กำหนดโฟลเดอร์ที่จะบันทึกไฟล์
            cb(null, ('./uploads/Resume/'))
        },
        filename: function (req, file, cb) {
         
            cb(null, Date.now() + '_' + file.originalname)
        }
    }),
 })

 
var uploadTS = multer({

    storage:multer.diskStorage({
        destination: function (req, file, cb) {
            // ใช้งาน path module กำหนดโฟลเดอร์ที่จะบันทึกไฟล์
            cb(null, ('./uploads/transcript/'))
        },
        filename: function (req, file, cb) {
         
            cb(null, Date.now() + '_' + file.originalname)
        }
    }),
 })



router.post('/upload/resume', uploadRe.single('resume'), async (req, res)=> {
   


    // upload(req, res, function (err) {
    //   if (err instanceof multer.MulterError) {
    //     // A Multer error occurred when uploading.
    //   } else if (err) {
    //     // An unknown error occurred when uploading.
    //   }
   
    //   // Everything went fine.
    // })

    

const {
        file
    } = req 


	
    let result = await Files.create(file)
  
    return res.json(result).status(201).end('upload resume success')

})            



router.post('/upload/transcript', uploadTS.single('transcript'), async (req, res)=> {
   
const {
        file
    } = req 


	
    let result = await Files.create(file)
    
    return res.json(result).status(201).end('upload transcript success')

})            

router.get('/download/:_id', async (req,res,next)=>{
        const {_id} = req.params

        let downloadfile = await Files.findById({_id:_id}) 
        
        const filedest = downloadfile.path

      console.log(filedest)
      
     return res.sendFile(filedest,{ root: '../Recruiting-software-Server-Side-/' }),res.status(500)
        
      

})

router.get('/list', async (req,res,next)=>{
    
    let showFile = await Files.find({}) 
    
  console.log(showFile)
  
 return res.json(showFile).status(500)

  

})

router.delete('/del/:_id', async (req,res,next)=>{
    const {_id} = req.params


    let findfile = await Files.findByIdAndRemove({_id:_id})
    const filename = findfile.filename
    const filedest = findfile.destination
    fs.unlinkSync(filedest+filename)

   
    return res.json(findfile).status(204)
})

 

module.exports = router