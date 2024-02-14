const mongoose = require("mongoose");

const luggageSchema = new mongoose.Schema({
  luggageID: {
    type: String,
    required: true,
  },
  luggageType: {
    type: String,
    required: true,
  },
  cost: {
    type: String,
    required: true,
  },
  weightLimit: {
    type: String,
    required: true,
  },
});

const Luggage = mongoose.model("luggage", luggageSchema);

module.exports = Luggage;
