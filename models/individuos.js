'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Individuos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Individuos.belongsTo(models.Coleccion,{foreignKey: 'coleccionID'})
      Individuos.hasMany(models.Mantenimiento)
      Individuos.belongsToMany(models.Tarea, {through: 'Mantenimiento'})
    }
  }
  Individuos.init({
    id: {type:DataTypes.STRING, primaryKey:true},
    nombreVulgar: {type:DataTypes.STRING},
    nombreCientifico: {type:DataTypes.STRING},
    nombreFamilia: {type:DataTypes.STRING},
    latitud: {type:DataTypes.STRING},
    longitud: {type:DataTypes.STRING},
    diametro: {type:DataTypes.STRING},
    altura: {type:DataTypes.STRING},
  }, {
    sequelize,
    modelName: 'Individuos',
  });
  return Individuos;
};