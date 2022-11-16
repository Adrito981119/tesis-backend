'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Performance.belongsTo(models.Personal,{foreignKey:'PersonalCi'})
     Performance.belongsTo(models.Tarea,{foreignKey:'TareaId'})
    }
  }
  Performance.init({
    fechacumplimento:{type:DataTypes.DATE, primaryKey: true}
  }, {
    sequelize,
    modelName: 'Performance',
  });
  return Performance;
};