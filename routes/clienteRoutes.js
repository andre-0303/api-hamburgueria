import { Router } from 'express';
import { getTodosClientes, criarCliente } from '../controllers/clienteController.js';

const router = Router();

router.get('/', getTodosClientes);
router.post('/', criarCliente);

export default router;
