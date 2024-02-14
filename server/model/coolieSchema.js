const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const coolieSchema = new mongoose.Schema({
  cooliewaleID: {
    type: String,
    required: true,
  },
  badgeID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  workingStation: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  services: [
    {
      serviceID: String,
      assignedUserID: String,
      pnr: String,
      luggage: [
        {
          luggageType: String,
          luggageDesc: String,
          luggageWeight: String,
          luggageCost: String,
        },
      ],
      totalWeight: String,
      totalCost: String,
      startedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// password hashing
coolieSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// token generation
coolieSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const Coolies = mongoose.model("coolie", coolieSchema);

module.exports = Coolies;
