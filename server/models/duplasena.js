const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const duplasenaSchema = new Schema({
  concurso: { type: String, required: true },
  data: { type: String, required: true },
  sorteio1: { type: Array, required: true },
  sorteio2: { type: Array, required: true }
});

module.exports = mongoose.model('Duplasena', duplasenaSchema);
