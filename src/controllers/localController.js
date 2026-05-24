import * as localService from '../services/localService.js';

export async function criar(req, res) {
  try {
    const novoLocal = await localService.criarLocal(req.body);
    return res.status(201).json(novoLocal);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
}

export async function listar(req, res) {
  try {
    const locais = await localService.listarLocais();
    return res.status(200).json(locais);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro interno no servidor' });
  }
}

export async function buscar(req, res) {
  try {
    const { id } = req.params; // Pega o ID da URL
    const local = await localService.buscarLocalPorId(id);
    return res.status(200).json(local);
  } catch (error) {
    // 404 = Not Found
    return res.status(404).json({ erro: error.message });
  }
}

export async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const localAtualizado = await localService.atualizarLocal(id, req.body);
    return res.status(200).json(localAtualizado);
  } catch (error) {
    const status = error.message.includes('não encontrado') ? 404 : 400;
    return res.status(status).json({ erro: error.message });
  }
}

export async function remover(req, res) {
  try {
    const { id } = req.params;
    await localService.deletarLocal(id);
    return res.status(204).send();
  } catch (error) {
    return res.status(404).json({ erro: error.message });
  }
}