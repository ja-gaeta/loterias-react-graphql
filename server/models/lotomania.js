const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lotomaniaSchema = new Schema({
  concurso: { type: String, required: true },
  data: { type: String, required: true },
  sorteio: { type: Array, required: true }
});

module.exports = mongoose.model('Lotomania', lotomaniaSchema);
