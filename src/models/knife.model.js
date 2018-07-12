//Load mongoose package
const mongoose = require('mongoose');

const KnifeSchema = new mongoose.Schema({
  brand: String,
  model: String,
  created_at: {type: Date, default: Date.now},
  deleted: {type: Boolean, default: false}
});

const Knife = mongoose.model('Knife', KnifeSchema);

Knife.count({}, function(err, count) {
  if (err) {
    throw err;
  }

  if (count > 0) return ;

  const knives = require('./knife.seed.json');

  Knife.create(knives, function(err, newKnives) {
    if (err) {
      throw err;
    }
    console.log("DB seeded")
  });

});

module.exports = Knife;
