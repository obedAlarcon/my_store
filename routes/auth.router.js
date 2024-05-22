const express = require('express');

const passport = require('passport');
const {checkRoles}=require('./../middlewares/auth.handler');



const AuthService= require('./../services/auth.service');
const router = express.Router();
const service = new AuthService();


router.post('/login', 
// la estrategias es local 
passport.authenticate('local', { session: false }),
 //que no queremos las sessiones
async (req, res, next) => {
  try {
    const user = req.user
    res.json(service.signToken(user));
    
  } catch (error) {
    next(error);
  }
});
router.post('/recovery',

async(req, res, next)=>{
  try {
    const {email}= req.body; 
    const response =await service.sendRecovery(email);
    res.json(response);
  } catch (error) {
    next(error)
  }
}


);

router.post('/change-password',
async(req,res,next)=>{
  try{
    const{token,newPassword}=req.body;
    const rta=await service.changePassword(token,newPassword);
    res.json(rta);
  }catch(error){
    next(error);
  }
});


module.exports = router;
