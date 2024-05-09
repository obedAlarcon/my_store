
require ('dotenv').config();// con este se lee el arvico ,env
const config ={

    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process. env.DB_NAME,
    dbPort: process.env.DB_PORT,

}
 module.exports = {config};

// con estas variables de entorno no mandamo la info de las credencailes al codigo
// por que las praemos desde un archivo externo .env