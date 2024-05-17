const {Model,Sequelize, DataTypes}= require('sequelize');
const {CUSTOMER_TABLE}=require('./customer.model');

const ORDER_TABLE ='orders';


const OrderSchema= {
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
    total:{
     type:DataTypes.VIRTUAL,
     // con el get obtenos y calculamos este campo
     get(){
        if(this.items.length > 0){
          return this.items.reduce((total,item)=>{
           return total+(item.price * item.OrderProduct.amount);// calculamos el total

          },0)
        }
           return 0;

     }
    }
}

  class Order extends Model{
    static associate(models){
        this.belongsTo(models.Customer,{ // belongsTo es una relacion ubo a muchos
           as:'customer',
           
        });
        //
     
        this.belongsToMany(models.Product,{ // este es el item que va a tener muchos productos
            as:'items',
            through:models.OrderProduct, // esto significa atravez de cual tabla se resuelve esta relacion
            foreignKey:'orderId',// esta es la tabla que resuelve la relacion
            otherKey:'productId'// la otra llave es esta 
        })
    }

    static config(sequelize){
        return{
            sequelize,
            tableName:ORDER_TABLE,
            modelName:'Order',
            timestamps:false
        }
    }
  }



module.exports ={
    Order, OrderSchema, ORDER_TABLE
}
   
// si por alguna raazon presenta error en la m igracion 
// es por que hay que pasr el modelo a la migracion sin el campo ne cuestion 
// si el campo adicional es el que presenta el erro cuando paemos a la micgracion lo ´pasmos sin ese ca¿mpo
