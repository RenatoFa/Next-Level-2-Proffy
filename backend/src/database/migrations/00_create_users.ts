// Criação das tabelas 
// Primeira tabela : create_users

import Knex from 'knex';


// Metodo up : Quais alterações eu quero colocar no banco de dados

export async function up(knex:Knex){

    //criar tabela 
    return knex.schema.createTable('users', table =>{

        //Campos da Tabela

        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();

    })

}

// Metodo down : se der merda , quais alterações eu preciso desfazer 


export async function down(knex:Knex){
    
}