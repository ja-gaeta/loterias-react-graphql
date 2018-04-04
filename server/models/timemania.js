const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timemaniaSchema = new Schema({
  concurso: { type: String, required: true },
  data: { type: String, required: true },
  time: { type: String, required: true },
  sorteio: { type: Array, required: true }
});

module.exports = mongoose.model('Timemania', timemaniaSchema);
