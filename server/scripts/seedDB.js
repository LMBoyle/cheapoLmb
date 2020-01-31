const server  = require('../server'),
      db      = require('../models');
      data    = require('./userSeeds');

let user = data.friends

async function seed(req, res) {
  try {

    for (let d = 0; d < data.friends.length; d++) {
      await seedUser(d)
    };
  }
  catch (err) {
    console.log(err)
  }
  
  return ("saved all users");
}

function seedUser(d) {
  db.User
    .findOne({ 'username': user[d].userName }, (err, userMatch) => {

      console.log('Looking for ' + user[d].userName)

      if (userMatch) {
        throw "user already in database";
      }

      const newUser = new db.User({
        'firstName': user[d].firstName,
        'lastName': user[d].lastName,
        'username': user[d].userName,
        'password': user[d].userName + 'pass',
        'image': user[d].img
      });

      newUser.save((err, savedUser) => {
        if (err) return err;
        return savedUser
      });

    })
}

seed()