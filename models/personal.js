'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Personal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Personal.hasOne(models.Usuario)
    }
  }
  Personal.init({
    ci: {type:DataTypes.STRING, primaryKey:true, allowNull:false},
    fullname: {type:DataTypes.STRING, allowNull:false},
    telefono: {type:DataTypes.STRING, allowNull:true},
    email: {type:DataTypes.STRING, allowNull:true},
    cargo: {type:DataTypes.STRING, allowNull:false, len:[3,20]},
  }, {
    sequelize,
    modelName: 'Personal',
  });
  return Personal;
};