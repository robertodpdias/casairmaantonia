const { Model, DataTypes } = require('sequelize');

class funcionario extends Model{
    static init(datacon) {
        super.init({
            matricula: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            nome: {
                type: DataTypes.STRING(75),
                allowNull: false,
            },
            rg: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            cpf: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            }, 
            dataNascimento: {
                type: DataTypes.Date,
                allowNull: false,
            },
            estadoCivil: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }, 
            sexo: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            foto: {
                type: DataTypes.STRING(60000),
                allowNull: false,
            },
            cargo: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            dataAdmissao: {
                type: DataTypes.Date,
                allowNull: false,
            },
            dataDemissao: {
                type: DataTypes.Date,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },            
            },
            {
            sequelize: datacon,
            tableName: 'funcionarios',
            modelName: 'funcionario',
        });
    }
    //METODO ASSOCIACAO DAS CHAVES PRIMARIAS  E EXTRAGEIRAS
    static associate(models) {
        //funcionario.hasMany(models.agenda, {foreignKey: 'id_docente'});
    }    
} 
//QUANDO EXPORTA AS CLASSE, TUDO QUE ESTA DENTRO DELA É EXPORTADO
module.exports = funcionario;