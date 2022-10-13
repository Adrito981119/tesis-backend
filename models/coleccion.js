'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        Coleccion.hasMany(models.Individuos, {foreignKey: 'coleccionID', sourceKey: 'id'})     
    }
  }
  Coleccion.init({
      id: {type:DataTypes.STRING, primaryKey: true ,allowNull: false},
      nombreVulgar: {type:DataTypes.STRING, allowNull: false},
      nombreCientifico: {type:DataTypes.STRING, allowNull: false},
      nombreFamilia: {type:DataTypes.STRING,allowNull: false},
      posicion: {type:DataTypes.STRING, allowNull:true},
      cant:{type:DataTypes.INTEGER,allowNull: false},

  }, {
    sequelize,
    modelName: 'Coleccion',
  });
  return Coleccion;
};