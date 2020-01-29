// Dependencies ===================================================================================

const router = require("express").Router();
const friendsController = require("../../controllers/friendsController");

// Routes =========================================================================================

// Matches with "/api/friends"
router
  .route("/")
  .get(friendsController.findAll);

// Matches with "/api/friends/:id"
router
  .route("/:id")
  .get(friendsController.findById)
  .put(friendsController.update)
  .delete(friendsController.remove);

// Export =========================================================================================

module.exports = router;
