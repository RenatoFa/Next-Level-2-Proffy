// Criação das tabelas
// Terceira tabela : create_class_schedule

import Knex from "knex";

// Metodo up : Quais alterações eu quero colocar no banco de dados

export async function up(knex: Knex) {
  //criar tabela
  return knex.schema.createTable("class_schedule", (table) => {
    //Campos da Tabela

    table.increments("id").primary();

    table.integer("week_day").notNullable();
    table.integer("from").notNullable();
    table.integer("to").notNullable();

    // Relacimentos com a tabela usuario
    table
      .integer("class_id")
      .notNullable()
      .references("id")
      .inTable("classes")
      .onDelete("CASCADE") // Deleta as aulas do professor deletado em cascata
      .onUpdate("CASCADE");
  });
}

// Metodo down : se der merda , quais alterações eu preciso desfazer

export async function down(knex: Knex) {
  return knex.schema.dropTable("class_schedule");
}
