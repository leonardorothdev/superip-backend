import { enums } from "./migrations/create-enums.js";
import { tables } from "./migrations/create-tables.js";
import { relations } from "./migrations/create-relations.js";
import pool from "./database.js";

async function runMigrations() {
  try {
    // Testa conexão
    await pool.query("SELECT 1");

    console.log("Conexão com o banco de dados estabelecida com sucesso.\n");

    console.log("Criando Enums...");
    await pool.query(enums);
    console.log("Enums criados com sucesso!\n");

    console.log("Criando Tabelas...");
    await pool.query(tables);
    console.log("Tabelas criadas com sucesso!\n");

    console.log("Criando Relações...");
    await pool.query(relations);
    console.log("Relações criadas com sucesso!\n");

    console.log("Migrações executadas com sucesso!");
  } catch (error) {
    console.error("Erro fatal ao criar tabelas:", error);
  } finally {
    await pool.end();
  }
}

runMigrations();
