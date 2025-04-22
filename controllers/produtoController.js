import Produto from '../models/Produto.js'; // Importando com a extensão .js

export async function getTodos(req, res) {
  try {
    const produtos = await Produto.find();  // Usando o método find() diretamente no modelo
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao buscar produtos', erro: err.message });
  }
}

export async function criar(req, res) {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao criar produto', erro: err.message });
  }
}

export async function deletar(req, res) {
  try {
    const produtoDeletado = await Produto.findByIdAndDelete(req.params.id); // Deletando o produto pelo ID
    if (!produtoDeletado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.json({ mensagem: 'Produto deletado' });
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao deletar produto', erro: err.message });
  }
}
