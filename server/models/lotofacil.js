const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lotofacilSchema = new Schema(
  {
    concurso: { type: String, required: true },
    data: { type: String, required: true },
    sorteio: { type: Array, required: true }
  },
  { collection: 'lotofaceis' }
);

module.exports = mongoose.model('Lotofacil', lotofacilSchema);
