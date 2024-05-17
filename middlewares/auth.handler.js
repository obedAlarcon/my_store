

const boom = require('@hapi/boom'); // boom getiona errores 
const {config}=require('./../config/config');




function checkApiKey( req, res, next){
     const DB_PASSWORD = req.headers['api'];
     if (DB_PASSWORD === config.dbPassword){
        next();
     }else{
        next(boom.unauthorized())
     }
}

function checkAdminRole(req,res,next){
   console.log(req.user)
   const user =req.user;
   if(user.role === 'admin'){
      next();
   }else{
      next(boom.unauthorized());

   }
}

// esta funcion es para reutilizar esta meleware en los roles 
   function checkRoles(...roles){
    
   return (req,res,next)=>{
      const user = req.user;
      if (roles.includes(user.role)){
         next();
      }else{
         next(boom.unauthorized());
      }
   }
    
   

   }



 module.exports ={checkApiKey, checkAdminRole, checkRoles}
 // 