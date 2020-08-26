// Criamos os controllers para não sobrecarregar o arquivo routes
// Como o request e o response perdem a tipagem , precisamos  da importação
import { Request, Response } from "express";

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinute";
// Vamos usar em formato de classe:

//Criação de uma interface para o scheduleitem
interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  // Criamos o metodo index para listar os professores

  async index(request: Request, response: Response) {
    // filtro vem do request.query
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHourToMinutes(time);

    // query para o banco de dados....para listar o usuarios.

    const classes = await db("classes")
      .whereExists(function () {
        this.select('class_schedule.*')
          .from("class_schedule")
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` == ??',[Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??' , [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??' , [timeInMinutes])
      })
      .where("classes.subject", "=", subject)
      .join("users", "classes.user_id", "=", "users.id")
      .select(["classes.*", "users.*"]);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    //desestruturação
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    //transaction : caso o usuario nao faça todas as operações , o transaction irá desfazer todas alterações.

    const trx = await db.transaction();

    // ao inves de usar db , nos usamos o trx.

    try {
      //Criação do usuario no banco de dados
      // db é o nosso de banco de dadods e users a tabela a ser inserido  as colunas que eu quero
      // inseridas
      // Coloquei em uma constante pq preciso do retorno do numero do id

      const insertUsersId = await trx("users").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      // Passo a primeira posição do id do usuarid
      const user_id = insertUsersId[0];

      //Criação do banco de dados (classe)
      // Coloquei em uma constante pq preciso do retorno do numero do id

      const insertdClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id,
      });

      const class_id = insertdClassesIds[0];

      // Falo que o scheduleItem tem o formato da interface scheduleitem
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          // Conversão , o week continua o mesmo
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      // So quando chegar no final ele fara o comit no banco de dados

      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      await trx.rollback(); // defaz o que a gente fez
      return response.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}
