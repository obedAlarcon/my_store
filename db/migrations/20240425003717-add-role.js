'use strict';

const {UserSchema, USER_TABLE}= require('./../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
  
   await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
  //con esta sentencia creamos la otra columna, la tabla no tenia el campo (role )
 
  
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn(USER_TABLE, 'role');  
   
  }
};
