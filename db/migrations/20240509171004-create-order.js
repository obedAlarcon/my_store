'use strict';


const { ORDER_TABLE}=require('./../models/order.model');
const {CUSTOMER_TABLE}=require('./../models/customer.model');
const {DataTypes, Sequelize}=require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
   
   await queryInterface.createTable(ORDER_TABLE, {

    id:{
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
      type:DataTypes.INTEGER,
  },
  customerId:{
      // esta es uan relacion uno a muchos
       field:'customer_id',
      allowNull:false,
      type:DataTypes.INTEGER,
      references:{
          model:CUSTOMER_TABLE,
          key:'id',
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL',
  },
  createdAt:{
      allowNull:false,
      type:DataTypes.DATE,
      field:'created_at',
      defaultValue:Sequelize.NOW
  },


   })
   
   
  
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(ORDER_TABLE);
    
    
    
    
  }
};
