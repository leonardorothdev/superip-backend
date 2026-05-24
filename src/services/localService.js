import * as localRepository from '../repositories/localRepository.js';

export async function criarLocal(data) {
  // Nome é obrigatório
  if (!data.nome) {
    throw new Error('O nome do local é obrigatório.');
  }

  return await localRepository.create(data.nome, data.descricao);
}

export async function listarLocais() {
  return await localRepository.findAll();
}

export async function buscarLocalPorId(id) {
  const local = await localRepository.findById(id);
  
  // O local tem que existir
  if (!local) {
    throw new Error('Local não encontrado.');
  }
  
  return local;
}

export async function atualizarLocal(id, data) {
  // Verifica se existe antes de tentar atualizar
  await buscarLocalPorId(id); 

  if (!data.nome) {
    throw new Error('O nome do local é obrigatório para atualização.');
  }

  return await localRepository.update(id, data.nome, data.descricao);
}

export async function deletarLocal(id) {
  await buscarLocalPorId(id); // Verifica se existe
  return await localRepository.remove(id);
}