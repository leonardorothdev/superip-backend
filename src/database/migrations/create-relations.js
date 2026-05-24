export const relations = `
  ALTER TABLE equipamento ADD CONSTRAINT fk_equipamento_usuario 
    FOREIGN KEY (usuario_cadastro_id) REFERENCES usuario(id);

  ALTER TABLE unidade_equipamento ADD CONSTRAINT fk_unidade_equipamento 
    FOREIGN KEY (equipamento_id) REFERENCES equipamento(id);

  ALTER TABLE unidade_equipamento ADD CONSTRAINT fk_unidade_usuario 
    FOREIGN KEY (usuario_cadastro_id) REFERENCES usuario(id);

  ALTER TABLE unidade_equipamento ADD CONSTRAINT fk_unidade_local 
    FOREIGN KEY (local_interno_id) REFERENCES local(id);

  ALTER TABLE telefone_cliente ADD CONSTRAINT fk_tel_cliente 
    FOREIGN KEY (cliente_id) REFERENCES cliente(id);

  ALTER TABLE telefone_usuario ADD CONSTRAINT fk_tel_usuario 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id);

  ALTER TABLE cliente_unidade ADD CONSTRAINT fk_cu_cliente 
    FOREIGN KEY (cliente_id) REFERENCES cliente(id);

  ALTER TABLE cliente_unidade ADD CONSTRAINT fk_cu_unidade 
    FOREIGN KEY (unidade_equipamento_id) REFERENCES unidade_equipamento(id);

  ALTER TABLE cliente_unidade ADD CONSTRAINT fk_cu_usuario_atribuicao 
    FOREIGN KEY (usuario_atribuicao_id) REFERENCES usuario(id);

  ALTER TABLE cliente_unidade ADD CONSTRAINT fk_cu_usuario_desvinculacao 
    FOREIGN KEY (usuario_desvinculacao_id) REFERENCES usuario(id);

  ALTER TABLE visita_tecnica ADD CONSTRAINT fk_vt_usuario 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id);

  ALTER TABLE visita_tecnica ADD CONSTRAINT fk_vt_cliente 
    FOREIGN KEY (cliente_id) REFERENCES cliente(id);

  ALTER TABLE visita_unidade ADD CONSTRAINT fk_vu_visita 
    FOREIGN KEY (visita_id) REFERENCES visita_tecnica(id);

  ALTER TABLE visita_unidade ADD CONSTRAINT fk_vu_unidade 
    FOREIGN KEY (unidade_equipamento_id) REFERENCES unidade_equipamento(id);

  ALTER TABLE teste ADD CONSTRAINT fk_teste_usuario 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id);

  ALTER TABLE teste ADD CONSTRAINT fk_teste_unidade 
    FOREIGN KEY (unidade_equipamento_id) REFERENCES unidade_equipamento(id);

  ALTER TABLE teste ADD CONSTRAINT fk_teste_visita 
    FOREIGN KEY (visita_id) REFERENCES visita_tecnica(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_usuario 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_unidade 
    FOREIGN KEY (unidade_equipamento_id) REFERENCES unidade_equipamento(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_local_origem 
    FOREIGN KEY (local_origem_id) REFERENCES local(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_cliente_origem 
    FOREIGN KEY (cliente_origem_id) REFERENCES cliente(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_local_destino 
    FOREIGN KEY (local_destino_id) REFERENCES local(id);

  ALTER TABLE movimentacao ADD CONSTRAINT fk_mov_cliente_destino 
    FOREIGN KEY (cliente_destino_id) REFERENCES cliente(id);
    
  ALTER TABLE log_acao ADD CONSTRAINT fk_log_usuario 
    FOREIGN KEY (usuario_id) REFERENCES usuario(id);
`



