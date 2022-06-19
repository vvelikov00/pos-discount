const dwhDb = require('../../config/dwhDatabase')
const { DataTypes } = require('sequelize');

const POSTerminals = dwhDb.define('POSTerminals', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  merchantId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  dwhDb,
  tableName: 'POSTerminals',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "POSTerminals_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = POSTerminals;
