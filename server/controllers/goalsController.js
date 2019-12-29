// Dependencies ===================================================================================

const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

// Export =========================================================================================

module.exports = {

  // Methods ======================================================================================
  
  findAll: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate({ path: "goals" })
        .then(users => {
          res.json({ goals: users[0].goals });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ goals: null });
    }
  },

  findById: function(req, res) {
    if (req.user) {
      db.User
        .find({ _id: req.user._id })
        .populate("goals")
        .then(users => {
          const goal = users[0].goals.filter(b => b._id.toString() === req.params.id);
          res.json({ goals: goal[0] });
        })
        .catch(err => res.status(422).json(err));
    } else {
      return res.json({ goals: null });
    }
  },

  create: function(req, res) {
    db.Goal
      .create(req.body)
      .then(dbGoal => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { goals: dbGoal._id } }, { new: true });
      })
      .then((dbUser) => {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Goal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { goals: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Goal
          .findOneAndDelete({ _id: req.params.id })
          .then(dbGoal => res.json(dbGoal))
          .catch(err => res.status(422).json(err));
      });
  }
};
