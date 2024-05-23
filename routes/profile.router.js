const express= require('express');
const passport= require('passport');

const OrderService = require('../services/order.service');
const { checkRoles } = require('../middlewares/auth.handler');

const router = express.Router();


const service = new OrderService();

router.get('/my-orders',
passport.authenticate('jwt',{session:false}),
checkRoles('customer'),
async (req, res,next)=>{
    try {
         const user = req.user;
       const orders = await service.findByUser(user.sub);
       // el sub es propieterio del token
       res.json(orders)
    } catch (error) {
        next(error);
    }
}


);

module.exports = router;