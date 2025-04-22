import express from 'express';
const router = express.Router();

// Exemplo de pedido (você pode trocar depois por acesso ao banco)
let pedidos = [];

// Criar novo pedido (POST)
router.post('/', (req, res) => {
  const novoPedido = {
    id: pedidos.length + 1,
    cliente: req.body.cliente,
    itens: req.body.itens,
    total: req.body.total
  };
  pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
});

// Listar todos os pedidos (GET)
router.get('/', (req, res) => {
  res.json(pedidos);
});

// Buscar pedido por ID (GET)
router.get('/:id', (req, res) => {
  const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
  if (!pedido) return res.status(404).json({ mensagem: 'Pedido não encontrado' });
  res.json(pedido);
});

// Atualizar pedido (PUT)
router.put('/:id', (req, res) => {
  const pedido = pedidos.find(p => p.id === parseInt(req.params.id));
  if (!pedido) return res.status(404).json({ mensagem: 'Pedido não encontrado' });

  pedido.cliente = req.body.cliente || pedido.cliente;
  pedido.itens = req.body.itens || pedido.itens;
  pedido.total = req.body.total || pedido.total;

  res.json(pedido);
});

// Deletar pedido (DELETE)
router.delete('/:id', (req, res) => {
  pedidos = pedidos.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

export default router;
