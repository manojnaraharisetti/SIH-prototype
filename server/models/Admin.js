const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define(
  "admin",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    admin_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_sellername: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_sellernumber: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    admin_gender: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    admin_productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_housenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_street: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    admin_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "admin", timestamps: false }
);

module.exports = Admin;





