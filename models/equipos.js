'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Equipos.hasMany(models.Plantilla, {foreignKey: 'EquipoId',sourceKey: 'id'})
    }
  }
  Equipos.init({
    id: {type:DataTypes.INTEGER,primaryKey: true, autoIncrement: true},
    nombre: {type:DataTypes.STRING, allowNull:false, len:[3,20]},
  }, {
    sequelize,
    modelName: 'Equipos',
  });
  return Equipos;
};