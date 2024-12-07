const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  localitate: { type: String, required: true },
  judet: { type: String, required: true },
  strada: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
  cnp: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{13}$/,
  },
  nume: { type: String, required: true },
  prenume: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  adresa: {
    type: addressSchema,
    required: true,
  },
  parola: { type: String, required: true, minlength: 8 },
  telefon: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/,
  },
  credite: {
    type: Number,
    default: 0,
  },
  admin: {
    type: Boolean,
    required: false,
    default: false,
  },
  poza: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
