// Instalar antes:

//  1º yarn add typescript -D para instalar o typescript
//  2º yarn tsc --init
//  3º yarn add ts-node-dev -D
//  4º"start": "tsnd --transpile-only --ignore-watch node_modules --respawn src/server.ts" : yarn start para dar o start no server
//  5º yarn add express
//  6º npm install @types/express
//  7º yarn add knex sqlite3

// Metodos mais famosos em Http:

// Get: Busca ou lista uma informação
// Post: Cria uma nova informação
// Put : Atualiza a informação
// Delete : Deleta uma informação

// Corpo (Request Body): Dados da criação ou atualização de um registro
// Route Params: (:id) Identificar qual recurso eu quero atualizar ou deletar
// Query Params: (?search) Paginação , filtros, ordenação e Buscas

// Banco de dados Sqlite

// Começo do Códigp

import express from "express";
import routes from "./routes";

const app = express();

// Importação dp express.json
app.use(express.json());

// importamos o route arquivo;

app.use(routes)


// localhost:3333

app.listen(3333);
