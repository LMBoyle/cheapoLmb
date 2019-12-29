// Dependencies ===================================================================================

const db = require("../models");

// Export =========================================================================================

module.exports = {

  // Methods ======================================================================================
  // Defining methods for the userController
  
  getUser: (req, res, next) => {
    // console.log("in userController.js, getUser");
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },

  register: (req, res) => {
    // console.log("in userController.js, register");
    const { firstName, lastName, username, password } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'username': username }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the username: ${username}`
        });
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'username': username,
        'password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },

  update: (req, res) => {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  logout: (req, res) => {
    // console.log("in userController.js, logout");
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },

  auth: function(req, res, next) {
    // console.log("in userController.js, auth");
		next();
  },

  authenticate: (req, res) => {
    // console.log("in userController.js, authenticate");
		const user = JSON.parse(JSON.stringify(req.user)); // hack
		const cleanUser = Object.assign({}, user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};