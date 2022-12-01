'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mantenimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Mantenimiento.belongsTo(models.Individuos)
    Mantenimiento.belongsTo(models.Tarea)
    }
  }
  Mantenimiento.init({
  }, {
    sequelize,
    modelName: 'Mantenimiento',
  });
  return Mantenimiento;
};