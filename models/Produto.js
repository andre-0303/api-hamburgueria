import mongoose from 'mongoose';

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  // Adicione mais campos conforme necessário
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto;
