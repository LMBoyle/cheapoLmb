// Dependencies ===================================================================================

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema =========================================================================================

const goalSchema = new Schema({
  goalName: { type: String, required: true },
  totalAmt: { type: Number, required: true },
  weeklyAmt: { type: Number, required: true },
  totalSavedAmt: { type: Number, default: 0},
  weeklySavedAmt: { type: Number, default: 0},
  progress: {type: Array}
});

const Goal = mongoose.model("Goal", goalSchema);

// Export =========================================================================================

module.exports = Goal;
