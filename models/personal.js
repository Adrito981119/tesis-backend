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
      // define association here
      Personal.hasMany(models.Plantilla, {foreignKey: 'PersonalCi',sourceKey: 'ci'})
    }
  }
  Personal.init({
    ci: {type:DataTypes.STRING, primaryKey:true, allowNull:false},
    nombre: {type:DataTypes.STRING, allowNull:false, len:[3,20]},
    pApellido: {type:DataTypes.STRING, allowNull:true, len:[3,20]},
    sApellido: {type:DataTypes.STRING, allowNull:true, len:[3,20]},
    telefono: {type:DataTypes.INTEGER, allowNull:true},
    email: {type:DataTypes.STRING, allowNull:true},
    cargo: {type:DataTypes.STRING, allowNull:false, len:[3,20]},
  }, {
    sequelize,
    modelName: 'Personal',
  });
  return Personal;
};