const express = require('express')
const mongoose = require('mongoose')
const router  = express.Router()
const Admin = mongoose.model('admin')

router.get('/', (req, res, next) => {
    Admin.find({}).then(ord => {
        res.status(200).json(ord)
    }).catch(err => {
        return res.status(500).json({ err: err });
    })
})
module.exports = router;