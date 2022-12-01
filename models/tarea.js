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
        Tarea.hasMany(models.Mantenimiento)
        Tarea.belongsToMany(models.Individuos,{through: 'Mantenimiento'})
        }
  }
  Tarea.init({
    id:{type: DataTypes.STRING, primaryKey: true},
    fechainicio: {type:DataTypes.DATE,allowNull:false},
    fechafin: {type: DataTypes.DATE,allowNull:false},
    descripcion:{type:DataTypes.TEXT,allowNull:false},
    cumplida:{type:DataTypes.BOOLEAN,allowNull:false},
    fechacumplida:{type:DataTypes.DATE,allowNull:true},
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};