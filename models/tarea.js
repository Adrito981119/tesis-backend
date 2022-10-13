'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
        }
  }
  Tarea.init({
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    fechainicio: {type:DataTypes.DATE},
    fechafin: {type: DataTypes.DATE},
    descripcion:{type:DataTypes.TEXT,allowNull:false},
    cumplida: {type: DataTypes.BOOLEAN, allowNull: true},
    fechacumplida: {type:DataTypes.DATE,allowNull:true},
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};