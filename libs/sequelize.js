
const { Sequelize} =require('sequelize');
const {config} = require('./../config/config');

const setupModels = require('./../db/models/index')

   const USER = encodeURIComponent(config.dbUser);
   const PASSWORD =encodeURIComponent(config.dbPassword);
    const URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


  const sequelize = new Sequelize(URI,{
    dialect:'postgres',
    logging:true,

  })
  // recibimos la conexion desde el index.js
 setupModels(sequelize);
 // cincronizamos con la db y se crea la tabla
 //sequelize.sync();
  module.exports= sequelize;