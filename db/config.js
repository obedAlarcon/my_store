

const {config} = require('./../config/config');


   const USER = encodeURIComponent(config.dbUser);
   const PASSWORD =encodeURIComponent(config.dbPassword);
    const URI=`postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`
   



  module.exports= {
    
    development: {
        url:URI,
         dialect:{
          dialect: 'postgres'
         }
                           
    },
    production:{
        url:URI,
        dialect:{

          dialect: 'postgres'
        }            
    }
  }

  // con esta configuracion ya podemos gestionar y correr migraciones

  // el comando para correlas migraciones es : npm run migrations:run
  // b con las migraciones poddemos hacer cambios en las tablas paro saing no se puede