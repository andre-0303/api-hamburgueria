import express from 'express';
import { listarPedidos, criarPedido, deletarPedido, atualizarPedido} from '../controllers/pedidoController.js';

const router = express.Router();

// Rota para listar todos os pedidos
router.get('/', listarPedidos);

// Rota para criar um novo pedido
router.post('/', criarPedido);

// Rota para deletar um pedido
router.delete('/:id', deletarPedido);

//Rota para atualizar um pedido
router.put('/:id', atualizarPedido);

export default router;
