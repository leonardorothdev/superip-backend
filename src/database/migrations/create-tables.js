export const tables = `
CREATE TABLE local (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE usuario (
  id SERIAL PRIMARY KEY,
  foto_perfil VARCHAR(255),
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  perfil_acesso perfil_acesso NOT NULL,
  senha VARCHAR(255) NOT NULL,
  status usuario_status NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE equipamento (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  fabricante VARCHAR(50) NOT NULL,
  modelo VARCHAR(100) NOT NULL,
  descricao TEXT,
  especificacoes TEXT,
  usuario_cadastro_id INT NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE unidade_equipamento (
  id SERIAL PRIMARY KEY,
  equipamento_id INT NOT NULL,
  serial VARCHAR(50) UNIQUE NOT NULL,
  patrimonio VARCHAR(50) UNIQUE,
  data_aquisicao DATE,
  valor_aquisicao DECIMAL(12,2),
  fornecedor VARCHAR(100),
  local_interno_id INT, 
  status unidade_status NOT NULL,
  observacoes TEXT,
  usuario_cadastro_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE cliente (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cnpj_cpf VARCHAR(20) UNIQUE NOT NULL,
  cidade VARCHAR(50) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  endereco VARCHAR(150),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE telefone_cliente (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  numero VARCHAR(20) NOT NULL,
  tipo telefone_tipo NOT NULL,
  contato VARCHAR(100),
  is_principal BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE telefone_usuario (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL,
  numero VARCHAR(20) NOT NULL,
  tipo telefone_tipo NOT NULL,
  is_principal BOOLEAN DEFAULT false NOT NULL
);

CREATE TABLE cliente_unidade (
  id SERIAL PRIMARY KEY,
  cliente_id INT NOT NULL,
  unidade_equipamento_id INT NOT NULL,
  usuario_atribuicao_id INT NOT NULL,
  usuario_desvinculacao_id INT,
  data_atribuicao DATE NOT NULL,
  data_desvinculacao DATE,
  motivo_retirada TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE visita_tecnica (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  numero_protocolo VARCHAR(20) UNIQUE NOT NULL,
  usuario_id INT NOT NULL,
  cliente_id INT NOT NULL,
  motivo TEXT NOT NULL,
  status visita_status NOT NULL,
  data_agendada TIMESTAMP NOT NULL,
  data_realizacao TIMESTAMP,
  descricao TEXT,
  observacoes_gerais TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE visita_unidade (
  id SERIAL PRIMARY KEY,
  visita_id UUID NOT NULL,
  unidade_equipamento_id INT NOT NULL,
  observacoes TEXT,
  resultado visita_resultado NOT NULL,
  laudo_especifico TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE teste (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id INT NOT NULL,
  unidade_equipamento_id INT NOT NULL,
  visita_id UUID,
  data_inicio TIMESTAMP NOT NULL,
  data_fim TIMESTAMP,
  tipo_teste teste_tipo NOT NULL,
  descricao_problema TEXT,
  procedimento TEXT,
  laudo_tecnico TEXT,
  acoes_recomendadas TEXT,
  resultado teste_resultado NOT NULL,
  observacoes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE movimentacao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id INT NOT NULL,
  unidade_equipamento_id INT NOT NULL,
  local_origem_id INT,
  cliente_origem_id INT,
  local_destino_id INT,
  cliente_destino_id INT,
  motivo TEXT NOT NULL,
  data_movimentacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  observacoes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE log_acao (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id INT NOT NULL,
  operacao log_operacao NOT NULL,
  entidade VARCHAR(50) NOT NULL,
  entidade_id VARCHAR(50) NOT NULL,
  ip_origem VARCHAR(45),
  dados_anteriores JSONB,
  dados_novos JSONB,
  data_acao TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  descricao TEXT
);
`