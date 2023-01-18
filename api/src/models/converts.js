const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "converts",
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
    }, { timestamps: false }
  );
};
