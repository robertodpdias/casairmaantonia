//METODO PARA CONEXÃO COM O BANCO DE DADOS
require('dotenv').config();
const {Sequelize} = require('sequelize');

const funcionario = require('../model/funcionario');
const assistido = require('../model/assistido');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER,"", {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
      timestamps: false,
    }
  });

  //METODO
  const sync = () =>{
    funcionario.init(sequelize);
    assistido.init(sequelize);
     
    funcionario.associate(sequelize.models);  
    assistido.associate(sequelize.models);
    
    sequelize.sync({force: false});
  }

  //EXPORTANDO OS METODOS CRIADOS ACIMA
  module.exports = {
    sequelize,
    sync,
  }