const boom = require('@hapi/boom');
const bcrypt= require('bcrypt');
const UserService = require('./user.service');
const jwt = require('jsonwebtoken');
const {config}= require('./../config/config');
const nodemailer= require('nodemailer');

const passport = require('passport');



const service = new UserService();
class AuthService {

 async getUser(email, password){
 
   const user =await service.findByEmail(email);
     if(!user){
     throw boom.unauthorized()
     }

     const isMatch = await bcrypt.compare(password, user.password);
       if(!isMatch){
        done(boom.unauthorized(), false);
       }

     delete user.dataValues.password;
     return user;
  }
  signToken(user){
  const payload={
    sub: user.id,
    role: user.role
  }

  const token = jwt.sign(payload, config.jwtSecret);
  return {
    user,
    token
  };

  }


   async sendRecovery(email){
    const user =await service.findByEmail(email);
    if(!user){
       throw boom.unauthorized();
    }
   const payload ={sub:user.id};
   const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'});
 const link =`http://myfrontend.com/recovery?token=${token}`;
 await service.update(user.id,{recoveryToken:token});
// link de connecion con el frontend de la app

    const mail ={
      from: config.smtpEmail, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Email para recuperar contraseña", // Subject line      
      text: "hola",
      html: `<b> Ingresa a este link => ${link}<b>`, // html body
    }
    const response =await this.sendMail(mail);
    return response;
   }

 async sendMail(infoMail){
    
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",      
        secure: true, // Use `true` for port 465, `false` for all other ports
        port: 465,
          auth: {
              user: config.smtpEmail,
              pass: config.smtpPassword, // esta es la contraseña de la app de gmail
          }
      });

       await transporter.sendMail(infoMail);
    return {massage:'mail sent'}
    
  }
}

module.exports=AuthService;