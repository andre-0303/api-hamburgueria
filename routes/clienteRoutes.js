import express from 'express';
const router = express.Router();

// Exemplo de rota para listar todos os clientes
router.get('/', (req, res) => {
  res.json({ mensagem: 'Listar todos os clientes' });
});

// Exemplo de rota para criar um novo cliente
router.post('/', (req, res) => {
  // Aqui você pode adicionar a lógica para criar um cliente
  res.status(201).json({ mensagem: 'Cliente criado com sucesso' });
});

// Exemplo de rota para deletar um cliente
router.delete('/:id', (req, res) => {
  // Lógica para deletar um cliente com base no ID
  res.json({ mensagem: `Cliente com ID ${req.params.id} deletado` });
});

export default router;
