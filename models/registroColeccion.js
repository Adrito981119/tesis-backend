'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegistroColeccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here     
    }
  }
  RegistroColeccion.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    fechacambio: {type:DataTypes.DATE,primaryKey:true},
    motivo:{type:DataTypes.STRING,primaryKey:true},
    nombreVulgar: {type:DataTypes.STRING,allowNull:false},
    nombreCientifico: {type:DataTypes.STRING,allowNull:false},
    nombreFamilia: {type:DataTypes.STRING,allowNull:false},
  }, {
    sequelize,
    modelName: 'RegistroColeccion',
  });
  return RegistroColeccion;
};