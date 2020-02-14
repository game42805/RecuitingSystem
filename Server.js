const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
require('dotenv').config()
const cors = require('cors')
const passport = require('passport')
const jwtDecode = require('jwt-decode')
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



const app = express();

app.use(cookieParser());
app.use(bodyParser.json()); // ให้รองรับ json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // ให้รองรับ  urlencoded bodies
app.use(cors())

app.use((req, res, next) => {
  let ALLOW_ORIGIN = ['http://localhost:4200']
  let ORIGIN = req.headers.origin
     if (ALLOW_ORIGIN.includes(ORIGIN)) {
       res.header('Access-Control-Allow-Origin', ORIGIN)
     }
     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
     return next()
  })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//connectMongo 
mongoose.connect(
    process.env.DB_CONNECT,{useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false,useCreateIndex:true },()=>
    console.log('Database Connected')
);
//MongoDb Schema
    require('./models/admin')
    require('./models/category')
    require('./models/user')
    require('./models/jobs')
    require('./models/subcategory')
    require('./models/exp')
    require('./models/jobstatus')
    require('./models/files')
   


  
//use passports/Pass Mid
app.use(passport.initialize())
require('./utility/passport')(passport)
const PassAuth = passport.authenticate('jwt', { session: false })

const tokenToReq = (req, res, next) => {
  token = (req.headers.authorization);
  decode = jwtDecode(token)
  req.uid = decode.id //user objectid
  next()
}    


// route Server
const authAdmin = require('./ServerRoutes/authAdmin')
const category = require('./ServerRoutes/category')
const home = require('./ServerRoutes/home')
const jobs = require('./ServerRoutes/jobs')
const subcat = require('./ServerRoutes/subcate')
const user = require('./ServerRoutes/user')
const exp = require('./ServerRoutes/exp')
const jobstatus = require ('./ServerRoutes/jobstatus')
const UploadDownload = require('./ServerRoutes/UploadDownload')


//use Route 
app.use('/admin',authAdmin)
app.use('/cat',category)
app.use('/jobs',jobs)
app.use('/subcat',subcat)
app.use('/user',user)
app.use('/exp',exp)
app.use('/jobstatus', jobstatus)
app.use('/home',PassAuth,tokenToReq,home)
app.use('/files',UploadDownload)


// use page frontend

app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
