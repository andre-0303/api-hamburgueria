import Pedido from '../models/Pedido.js';

export async function listarPedidos(req, res) {
    try {
      const { status, dataInicial, dataFinal } = req.query;
      let filter = {};
  
      if (status) {
        filter.status = status;
      }
  
      if (dataInicial && dataFinal) {
        filter.data = { $gte: new Date(dataInicial), $lte: new Date(dataFinal) };
      }
  
      const pedidos = await Pedido.find(filter).populate('cliente').populate('produtos.produto');
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao buscar pedidos' });
    }
  }
  

  export async function criarPedido(req, res) {
    try {
      const { cliente, produtos, total, status, dataEstimativaEntrega } = req.body;
      const pedido = new Pedido({
        cliente,
        produtos,
        total,
        status: status || 'pendente',  // Se não for passado, o status será 'pendente' por padrão
        dataEstimativaEntrega
      });
      await pedido.save();
      res.status(201).json(pedido);
    } catch (error) {
      res.status(400).json({ erro: 'Erro ao criar pedido' });
    }
  }
  

export async function deletarPedido(req, res) {
    try {
      const pedido = await Pedido.findByIdAndDelete(req.params.id);
      if (!pedido) {
        return res.status(404).json({ erro: 'Pedido não encontrado' });
      }
      res.json({ mensagem: 'Pedido deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao deletar o pedido' });
    }
  }

  export async function atualizarPedido(req, res) {
    try {
      const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!pedido) {
        return res.status(404).json({ erro: 'Pedido não encontrado' });
      }
      res.json(pedido);
    } catch (error) {
      res.status(500).json({ erro: 'Erro ao atualizar o pedido' });
    }
  }
  