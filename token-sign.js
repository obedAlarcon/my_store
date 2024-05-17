
const jwt = require('jsonwebtoken');
 

const secret ='myCat';
// esto es lo que vamos a encriptar dentro de ese token el payload
const payload={
    sub:1,  //este subject haceparte del estandar que es la forma de identificar el usuario
    role:'customer'
}

function signToken(payload, secret){
    return jwt.sign(payload,secret);
    
}

const token = signToken(payload, secret);
console.log(token)