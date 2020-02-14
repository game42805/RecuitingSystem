const jwt = require('jsonwebtoken');
const tokenKey = require('../key')


function CreateToken(req,res,next){
    
    jwt.sign(payload, tokenKey.jwt.secret,tokenKey.jwt.options, (err, encoded) => {
        if (err) console.error('Thene is some error is token', err)
        else 
        console.log({
         success: true,
          token: encoded // แสดงรหัส Token 
        })
      })
}


module.exports = {
    CreateToken

};