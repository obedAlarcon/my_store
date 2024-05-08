'use strict';

const { QueryInterface } = require('sequelize');
const {UserSchema, USER_TABLE}=require('./../models/user.model')
//const {UserSchema, USER_TABLE}=require('./../models/user.model')
//const {UserSchema, USER_TABLE}=require('./../models/user.model')
// TANTOS MODELOS COMO TANGAS LOS AGRAGAS AQUI
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable(USER_TABLE, UserSchema);
    // await queryInterface.createTable(USER_TABLE, UserSchema);
    // await queryInterface.createTable(USER_TABLE, UserSchema);
    // TANTO QUERYS COMO TABLAS TENGAS 
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable(USER_TABLE)
    
    
    
  }
};
