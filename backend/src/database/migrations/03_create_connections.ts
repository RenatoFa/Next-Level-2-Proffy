// Criação das tabelas
// Terceira tabela : create_connections

import Knex from "knex";

// Metodo up : Quais alterações eu quero colocar no banco de dados

export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable("connections", (table) => {
    //Campos da Tabela

    table.increments("id").primary();

  

    // Relacimentos com a tabela usuario
    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE") // Deleta as aulas do professor deletado em cascata
      .onUpdate("CASCADE");

      table.timestamp("create_at")
        .defaultTo('now()')
        .notNullable();
  });
}

// Metodo down : se der merda , quais alterações eu preciso desfazer

export async function down(knex: Knex) {
  return knex.schema.dropTable("connections");
}
