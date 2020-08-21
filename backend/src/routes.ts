//Arquivos de Rotas
//Importamos o express
import express from "express";
import db from "./database/connection";

// Criamos uma constante para gerenciar as rotas

const routes = express.Router();
// Primeira Rota sem o app


//Criação de uma interface para o scheduleitem
interface ScheduleItem {
   week_day: number;
   from: string;
   to: string;
}


// Primeira Rota sem o app
// promises com await para o banco de dados
// Rota para Criação de Aula , usuario e o scredule
routes.post("/classes", async (request, response) => {

    //desestruturação
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = request.body;
        
    //Criação do usuario no banco de dados
    // db é o nosso de banco de dadods e users a tabela a ser inserido  as colunas que eu quero
    // inseridas  
    // Coloquei em uma constante pq preciso do retorno do numero do id
    const insertUsersId = await db('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
    })

    // Passo a primeira posição do id do usuarid
    const user_id = insertUsersId[0];

    //Criação do banco de dados (classe)
        // Coloquei em uma constante pq preciso do retorno do numero do id

    const insertdClassesIds = await db('classes').insert({
       subject,
       cost,
       user_id

    })
     
    const class_id = insertdClassesIds[0];
    
    // Falo que o scheduleItem tem o formato da interface scheduleitem
    const classSchedule = schedule.map((scheduleItem:ScheduleItem)  =>{
        
        
        return{
            // Conversão , o week continua o mesmo 
            week_day: scheduleItem.week_day,
            from: 


        }
    })

    return response.send();
});




// exporta a routas para um outro arquivo
export default routes;
