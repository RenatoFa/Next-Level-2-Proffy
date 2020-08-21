// Criação das tabelas 
// Segunda tabela : create_classes

import Knex from 'knex';


// Metodo up : Quais alterações eu quero colocar no banco de dados

export async function up(knex:Knex){

    //criar tabela 
    return knex.schema.createTable('classes', table =>{

        //Campos da Tabela

        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        

        // Relacimentos com a tabela usuario
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE') // Deleta as aulas do professor deletado em cascata
            .onUpdate('CASCADE')
    })

}

// Metodo down : se der merda , quais alterações eu preciso desfazer 


export async function down(knex:Knex){
    return knex.schema.dropTable('classes');
    
}