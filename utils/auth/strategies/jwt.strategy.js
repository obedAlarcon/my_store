const {Strategy, Extractjwt}=require('passport-jwt');
const {config}=require('../../../config/config');


const options={
    jwtFromRequest:Extractjwt.fromAuthHeaderAsBearerToken(),
    secretOkey:config.jwtSecret
}
const jwtStrategy = new Strategy(options, (payload, done)=>{
    return done(null, payload);
});
module.exports= jwtStrategy;