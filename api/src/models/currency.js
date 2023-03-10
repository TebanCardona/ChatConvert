const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "currency",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      }
    }, { timestamps: false }
  );
};
