'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasOne(models.Personal,{foreignKey: 'usuario',sourceKey:'username'})
    }
  }
  Usuario.init({
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    username: {type:DataTypes.STRING,unique: true, allowNull: false},
    password: {type:DataTypes.STRING, allowNull: false},
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};