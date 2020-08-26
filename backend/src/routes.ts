//Arquivos de Rotas
//Importamos o express
import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";


// Criamos uma constante para gerenciar as rotas

const routes = express.Router();
// Primeira Rota sem o app


// Vamos chamar o classescontroller agora como uma instancia

const classesControlllers = new ClassesController();
const connectionsController = new ConnectionsController;




// Primeira Rota sem o app
// promises com await para o banco de dados
// Rota para Criação de Aula , usuario e o scredule
routes.post("/classes", classesControlllers.create);
routes.get("/classes", classesControlllers.index);

routes.get("/connections",connectionsController.index)
routes.post("/connections",connectionsController.create)

// exporta a routas para um outro arquivo
export default routes;
