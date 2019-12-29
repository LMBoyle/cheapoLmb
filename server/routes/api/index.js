// Dependencies ===================================================================================

const router = require("express").Router();
const goalsRoutes = require("./goals");

// Routes =========================================================================================

// Goals routes
router.use("/goals", goalsRoutes);

// Export =========================================================================================

module.exports = router;
