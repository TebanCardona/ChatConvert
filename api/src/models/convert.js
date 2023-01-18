const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "convert",
    {
      amount: {
        type: DataTypes.FLOAT,
      },
      currencyfrom: {
        type: DataTypes.STRING
      },
      currencyto: {
        type: DataTypes.STRING
      },
      converted: {
        type: DataTypes.FLOAT
      }
    },
  );
};
