const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const DistProd = sequelize.define(
  "dp",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    dp_distname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dp_products: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  { tableName: "dp", timestamps: false }
);

module.exports = DistProd;