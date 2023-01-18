const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "convert",
    {
      amount: {
        type: DataTypes.FLOAT,
      },
      currencyFrom: {
        type: DataTypes.STRING
      },
      currencyTo: {
        type: DataTypes.STRING
      },
      converted: {
        type: DataTypes.FLOAT
      }
    },
  );
};
