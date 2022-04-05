const { Model, DataTypes } = require('sequelize');

class assistido extends Model{
    static init(datacon) {
        super.init({
            antecedente: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            nome: {
                type: DataTypes.STRING(75),
                allowNull: false,
            },
            nomeSocial: {
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
            cartaoCidadao: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            cartaoSus: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
            fotoAntes: {
                type: DataTypes.STRING(60000),
                allowNull: false,
            },
            fotoDepois: {
                type: DataTypes.STRING(60000),
                allowNull: false,
            },
            cargo: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            dataCadastro: {
                type: DataTypes.Date,
                allowNull: false,
            },
            lgpd: {
                type: DataTypes.Date,
                allowNull: true,
            },
            id_funcionario: {
                type: DataTypes.STRING(50),
                allowNull: false,
                references: {
                    model: 'funcionario',
                    key: 'id',
                }
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
        //assistido.hasMany(models.agenda, {foreignKey: 'id_docente'});
    }    
} 
//QUANDO EXPORTA AS CLASSE, TUDO QUE ESTA DENTRO DELA É EXPORTADO
module.exports = assistido;