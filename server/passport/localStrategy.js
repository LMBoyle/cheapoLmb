// Dependencies ===================================================================================

const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

// Functions ======================================================================================

const strategy = new LocalStrategy(
  {
    usernameField: 'username' // not necessary, DEFAULT
  },
  function (username, password, done) {
    console.log("in local strategy: ", username, password)
    db.User.findOne({ 'username': username }, (err, userMatch) => {
      if (err) {
        return done(err);
      }
      if (!userMatch) {
        return done(null, false, { message: 'Incorrect username' });
      }
      if (!userMatch.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, userMatch);
    });
  }
);

// Export =========================================================================================

module.exports = strategy;