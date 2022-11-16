'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegistroIndividuos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     
    }
  }
  RegistroIndividuos.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    fechacambio: {type:DataTypes.DATE,primaryKey:true},
    motivo:{type:DataTypes.STRING,primaryKey:true},
    eliminado:{type:DataTypes.BOOLEAN,allowNull: false},
    nombreVulgar: {type:DataTypes.STRING,allowNull:false},
    nombreCientifico: {type:DataTypes.STRING,allowNull:false},
    nombreFamilia: {type:DataTypes.STRING,allowNull:false},
    latitud: {type:DataTypes.STRING,allowNull:false},
    longitud: {type:DataTypes.STRING,allowNull:false},
    diametro: {type:DataTypes.STRING,allowNull:false},
    altura: {type:DataTypes.STRING,allowNull:false},
    coleccionID: {type: DataTypes.STRING,allowNull:false}
  }, {
    sequelize,
    modelName: 'RegistroIndividuos',
  });
  return RegistroIndividuos;
};