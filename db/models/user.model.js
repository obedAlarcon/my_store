
const { Model, DataTypes, Sequelize}=require('sequelize');



const USER_TABLE ='users';
const UserSchema ={
    id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    email:{
        allowNull:false,
        type:DataTypes.STRING,
        unique:true
    },
    password: {

        allowNull:false,
        type:DataTypes.STRING,
    },

     recoveryToken:{
            field:'recovery_token',
            allowNull:true,
            type:DataTypes.STRING
     },

    role:{
        allowNull:false,
        type:DataTypes.STRING,
        defaultValue:'customer'

    },
    createdAt:{
        allowNull:false,
        type:DataTypes.DATE,
        field:'created_at',
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate(models){
        this.hasOne(models.Customer,{
            as:'customer',
            foreignKey:'userId'
        })
        // associate aqui vamos a definir todas las conexiones

    }
    static config(sequelize){
        return {
     
        sequelize,  //esta es la conexxion
        tableName : USER_TABLE, // table 
        modelName :'User', //nombre del modelo
        timestamps : false, //
     
   
   
        }
    }
}
// creammos modula exportable donde exportamos todo lo de esta entidad
module.exports = { USER_TABLE, UserSchema, User}