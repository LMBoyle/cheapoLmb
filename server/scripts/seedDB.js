const server  = require('../server'),
      db      = require('../models');
      data    = require('./userSeeds');


      console.log(db)

for (d=0; d < data.friends.length; d++) {
  var user = data.friends[d];

  db.User.findOne({ 'username': user.username }, (err, userMatch) => {

  if (userMatch) {
    return res.json({
      error: `Sorry, already a user with the username: ${username}`
    });
  }
  const newUser = new db.User({
    'firstName': user.firstName,
    'lastName': user.lastName,
    'username': user.username,
    'password': user.password
  });
  newUser.save((err, savedUser) => {
    if (err) return res.json(err);
    return res.json(savedUser);
  });
});
}