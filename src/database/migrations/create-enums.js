export const enums = `
  CREATE TYPE unidade_status AS ENUM (
  'estoque_utilizavel', 'estoque_para_descarte', 'em_uso', 'com_tecnico', 'em_transporte', 'em_teste',
  'descartado');

  CREATE TYPE visita_status AS ENUM (
  'agendada', 'em_andamento', 'concluida', 'cancelada', 'atrasada', 'nao_compareceu');

  CREATE TYPE visita_resultado AS ENUM (
  'aprovado', 'reprovado', 'pendente', 'com_pendencias', 'nao_aplicavel', 'em_andamento');

  CREATE TYPE teste_tipo AS ENUM (
  'calibracao', 'funcional', 'seguranca', 'desempenho', 'eletronico', 'mecanico',
  'software', 'integracao', 'outros');

  CREATE TYPE teste_resultado AS ENUM (
  'aprovado', 'reprovado', 'condicional', 'pendente', 'nao_aplicavel');

  CREATE TYPE usuario_status AS ENUM (
  'ativo', 'inativo', 'bloqueado', 'pendente');

  CREATE TYPE perfil_acesso AS ENUM (
  'administrador', 'tecnico', 'almoxarife', 'noc');

  CREATE TYPE log_operacao AS ENUM (
  'create', 'update', 'delete', 'movimentacao', 'atribuicao_cliente',
  'desvinculacao_cliente', 'inicio_teste', 'fim_teste', 'agendamento_visita',
  'conclusao_visita', 'cancelamento_visita', 'login', 'logout', 'outro');

  CREATE TYPE telefone_tipo AS ENUM (
  'celular', 'fixo', 'whatsapp', 'comercial', 'emergencia');
`
