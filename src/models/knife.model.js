//Load mongoose package
const mongoose = require('mongoose');

const KnifeSchema = new mongoose.Schema({
  brand: String,
  model: String,
  system: String,
  angle: Number,
  created_at: {type: Date, default: Date.now},
  deleted: {type: Boolean, default: false}
}); 
