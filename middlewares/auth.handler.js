

const boom = require('@hapi/boom'); // boom getiona errores 
const {config}=require('./../config/config')
function checkApiKey( req, res, next){
     const DB_PASSWORD = req.headers['api'];
     if (DB_PASSWORD === config.dbPassword){
        next();
     }else{
        next(boom.unauthorized())
     }
}

 module.exports ={checkApiKey}
 // 