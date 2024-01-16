const Sequelize=require('sequelize');
const dbUser='root';
const dbPassword='12345'
const dbName="inventorymanagement"


const sequelize=new Sequelize(dbName,dbUser,dbPassword,{
    host: "localhost",
    dialect: "mysql",
    port:'3306'


})
const db={}
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports=db;