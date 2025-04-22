import Cliente from '../models/Cliente.js';

export async function getTodosClientes(req, res) {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar clientes' });
  }
}

export async function criarCliente(req, res) {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ erro: 'Erro ao criar cliente' });
  }
}
