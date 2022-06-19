const appDb = require('../../config/appDatabase')
const { DataTypes } = require('sequelize');

const POSTerminals = appDb.define('POSTerminals', {
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
  appDb,
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
