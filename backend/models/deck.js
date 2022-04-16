'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deck extends Model {}

  deck.init({
    idx: {
      type : DataTypes.INTEGER,
      allowNull : false,
      primaryKey: true
    },
    info: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    sequelize,
    modelName: 'deck',
  });
  return deck;
};