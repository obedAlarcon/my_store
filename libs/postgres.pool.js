const {Pool} = require('pg');

const {config} = require('./../config/config');
const { options } = require('joi');


let URL='';
if(config.isProd){
    URI = config.dbUrl;
}else{
    const USER = encodeURIComponent(config.dbUser);
    const PASSWORD =encodeURIComponent(config.dbPassword);
    URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
    options.connectionString = URI;
}

    


    const pool = new Pool({ connectionString:URI });
   
   

module.exports =pool;
// se exporta pata toda la app
// mejor vercion de conexion 