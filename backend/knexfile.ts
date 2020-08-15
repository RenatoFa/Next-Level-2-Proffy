// O knex nã entende o Typescript
// Precisamos criar um arquivo para o reconhecimento
import path from 'path';

module.exports ={
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname,'src','database','database.sqlite')
    },
    migrations:{
        directory: path.resolve(__dirname,'src','database','migrations')

        
    },
    useNullAsDefault:true,

}