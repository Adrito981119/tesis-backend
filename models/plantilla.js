'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plantilla extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plantilla.belongsTo(models.Personal, {foreignKey: 'PersonalCi'})
      Plantilla.belongsTo(models.Equipos, {foreignKey: 'EquipoId'})
    }
  }
  Plantilla.init({
    EquipoId: {type:DataTypes.INTEGER, primaryKey:true},
    PersonalCi: {type:DataTypes.STRING,primaryKey:true},
  }, {
    sequelize,
    modelName: 'Plantilla',
  });
  return Plantilla;
};