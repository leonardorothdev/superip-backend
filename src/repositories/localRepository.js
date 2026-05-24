import pool from '../database/database.js';

// CREATE
export async function create(nome, descricao) {
  const query = `
    INSERT INTO local (nome, descricao) 
    VALUES ($1, $2) 
    RETURNING *;
  `;
  const result = await pool.query(query, [nome, descricao]);
  return result.rows[0];
}

// READ (Todos)
export async function findAll() {
  const query = 'SELECT * FROM local ORDER BY id ASC;';
  const result = await pool.query(query);
  return result.rows;
}

// READ (Por ID)
export async function findById(id) {
  const query = 'SELECT * FROM local WHERE id = $1;';
  const result = await pool.query(query, [id]);
  return result.rows[0];
}

// UPDATE
export async function update(id, nome, descricao) {
  const query = `
    UPDATE local 
    SET nome = $1, descricao = $2, updated_at = CURRENT_TIMESTAMP
    WHERE id = $3 
    RETURNING *;
  `;
  const result = await pool.query(query, [nome, descricao, id]);
  return result.rows[0];
}

// DELETE
export async function remove(id) {
  const query = 'DELETE FROM local WHERE id = $1 RETURNING *;';
  const result = await pool.query(query, [id]);
  return result.rows[0];
}