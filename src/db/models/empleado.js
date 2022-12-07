'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  empleado.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
  },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      }
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dni: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    fechaIngreso: {
      type: DataTypes.DATE,
    },
    
  }, {
    sequelize,
    modelName: 'empleado',
    tableName: 'empleados'
  });
  return empleado;
};