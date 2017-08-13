//import all dependencies
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportlocal = require('passport-local');
const mma = require('mma');

//initialize app
const app = express();

require('dotenv').config();

//middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(mma.fighter());

//static files
app.use(express.static('public'));

//views
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//set the port
const PORT = process.env.PORT || 3000;
//tell app to use port
app.listen(PORT, ()=>{
  console.log(`On port ${PORT}`);
});

//index route
app.get('/', (req, res)=>{
  res.render('index', {
    currentPage: 'Index',
    user: req.user,
  });
});
//views routes
const mainRoutes = require('./routes/main-routes');
app.use('/main', mainRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

//error handler
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});
