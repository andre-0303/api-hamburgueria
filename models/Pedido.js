import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    produtos: [{
      produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
      quantidade: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    data: { type: Date, default: Date.now },
    status: { type: String, enum: ['pendente', 'em andamento', 'finalizado'], default: 'pendente' },
    dataEstimativaEntrega: { type: Date },
  });

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
