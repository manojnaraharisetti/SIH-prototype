const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SignUpModal = sequelize.define(
  'signupmodel', 
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobilenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { tableName: 'signupmodel',
  timestamps: false, } //database table neam
);

module.exports = SignUpModal;