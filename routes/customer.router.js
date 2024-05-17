
const express = require('express');
const passport=require('passport')


const validatorHandler = require('./../middlewares/validator.handler');
 const CustomerService = require('./../services/customer.service');
 const {updateCustomerSchema, createCustomerSchema, getCustomerSchema}=require('./../schemas/customer.schema');


 const router =express.Router();
 const service = new CustomerService();

 router.get('/', async(req, res, next)=>{
    // con find ejecutamos el metodo getconnection que esta en el archivo customer services

    try {       
        res.json(await service.find());
    } catch (error) {
        next(error);
    }
 });
 
 

 router.get('/:id',

   passport.authenticate('jwt',{session: false}),
   
   
   validatorHandler(getCustomerSchema,'params'),

   async(req, res, next)=>{
     try {
      const {id}=req.params;
      const customer = await service.findOne(id);
      res.json(customer); 
     } catch (error) {
        next(error);
     }


   }

);

// este codigo es para traer el id cel customer pero eso se hace ocnel query de users es lo mismo!

router.post('/',

validatorHandler(createCustomerSchema, 'body'),
    async ( req, res, next)=>{
        try {
            const body=req.body;
            const newCustomer = await service.create(body);
            res.status(201).json(newCustomer);
        } catch (error) {
            next(error);
        }
    }

);

router.patch('/:id',


  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res ,next)=>{
    try {
        const {id}=req.params;
        const {body}=req.body;
        
        const customer = await service.update(id,body);
        res.json(customer);
        
    } catch (error) {
        next(error);    }
  }
);

router.delete('/:id',
validatorHandler (getCustomerSchema, 'params'),
async ( req, res, next)=>{
    try {
        const {id}=req.params;
    
        res.status(200).json(await service.delete(id));
    } catch (error) {
        
    }
}
);
module.exports=router;