// Dependencies ===================================================================================

const express  = require('express')
const routes = require("./routes");
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db'); // loads our connection to the mongo database
const passport = require('./passport');
require('dotenv').config();

// Express ========================================================================================

const app = express();
const PORT = process.env.PORT || 3012
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Environment ====================================================================================

// If it's production environment!

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	console.log('YOU ARE IN THE PRODUCTION ENV');
	app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../client/build/'))
	});
}

// Loading environmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}

// Middleware =====================================================================================

app.use(morgan('dev'));
app.use(session({
  secret: process.env.APP_SECRET || 'this is the default passphrase',
  store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false,
  saveUninitialized: false
}));

// Passport =======================================================================================

app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// Routes =========================================================================================

app.use(routes);

// Error Handler ==================================================================================

app.use(function(err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// Listen =========================================================================================

app.listen(PORT, function() {
  console.log(`API running on port ${PORT}!`);
});
