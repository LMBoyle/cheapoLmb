// Dependencies ===================================================================================

const router = require("express").Router();
const goalsRoutes = require("./goals");
const friendsRoutes = require("./friends");

// Routes =========================================================================================

// Goals routes
router.use("/goals", goalsRoutes);

// Friends routes
router.use("/friends", friendsRoutes);

// Export =========================================================================================

module.exports = router;
