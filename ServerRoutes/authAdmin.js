const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Admin = mongoose.model('admin')
const LoginValid = require ('../modules/loginValidator')
const RegisterValid = require('../modules/registerValidator')
const bcrypt = require('bcryptjs')
const utility = require('../utility')
const jwt = require ('jsonwebtoken')
const keys = require('../key')

router.post('/register', (req, res) => {
  const reqData = req.body
  console.log(reqData)
  const { errors, isValid } = RegisterValid(reqData)
  if (!isValid) return res.status(400).json(errors)
  Admin.findOne({ email: reqData.email }).then(admin => {
    if (admin) {
      return res.status(400).json({
        email: 'Email already exists'
      })
    } else {
      const newAdmin = new Admin({
        name: reqData.name,
        email: reqData.email,
        password: reqData.password
      })
      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error', err);
        else {
          bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if (err) console.error('There was an error', err);
            else {
              newAdmin.password = hash
              newAdmin.save().then(admin => {
                const payload = {
                  id: admin.id
                }
                utility.CreateToken(payload)
              })
            }
          })
        }
      })
    }
  })
})

router.post('/login',(req,res)=> {
  const reqData = req.body
  console.log(reqData)
  const {errors, isValid} = LoginValid (reqData)
  if(!isValid) return res.status(400).json(errors)
Admin.findOne({email:reqData.email}).then(admin=>{
if(!admin){
  errors.email ='Email not found'
  return res.status(400).json(errors)
}else{
  bcrypt.compare(reqData.password, admin.password).then(isMatch =>{
    if(isMatch){
      const payload = {
        id:admin.id
      }
      jwt.sign(payload, keys.jwt.secret,keys.jwt.options,(err , encoded)=>{
        if(err) console.error('then is some error is token',err)
        else res.json({
          success:true,
          token:encoded
        })
      })
    }else{
      errors.password = 'Incorrect Password'
      return res.status(400).json(errors)
    }
  })
}
})
})

  module.exports = router;