import { Router } from 'express';
const router = Router();
import { getTodos, criar, deletar } from '../controllers/produtoController.js';

router.get('/', getTodos);      // Rota para pegar todos os produtos
router.post('/', criar);        // Rota para criar um novo produto
router.delete('/:id', deletar); // Rota para deletar um produto

export default router;
