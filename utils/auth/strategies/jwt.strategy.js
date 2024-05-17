const {Strategy, ExtractJwt}=require('passport-jwt');
const {config}=require('../../../config/config');


const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:config.jwtSecret
}
const jwtStrategy = new Strategy(options, (payload, done)=>{
    return done(null, payload);
});
module.exports= jwtStrategy;

// EN LA ESTATEGI LE ENVIAMOS LAS PRIMEREAS OPCIONES
// PAYLOAD RESPONDE CON UNA FUNCIOON DONE EL PAYLOAD ES EL MISMO TOKEN

//