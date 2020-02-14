const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose');
const Admin = mongoose.model('admin');
const tokenKey = require('../key');

const opts = {}
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken()
opts.secretOrKey =  tokenKey.jwt.secret


module.exports = passport => {
    passport.use(new JwtStrategy(opts,(payload,done) => {    
        Admin.findById(payload.id).then(admin => {
            if(admin) return done(null,admin)
            return done(null,false)
        }).catch(err => {
            console.log(err);
        })
    }))
};
