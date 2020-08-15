// Conexão com o Banco Sqlite3

import knex from 'knex';
import path from 'path';

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db;

// As migrations = controlam a versão do banco de dados