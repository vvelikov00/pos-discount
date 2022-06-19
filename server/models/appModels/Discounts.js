const appDb = require('../../config/appDatabase')
const Merchants = require('./Merchants')
const { DataTypes } = require('sequelize');

const Discounts = appDb.define('Discounts', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  merchantid: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  start: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  end: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'Waiting'
  },
  approved: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  first: {
    type: DataTypes.STRING,
    defaultValue: 0
  },
  second: {
    type: DataTypes.STRING,
    defaultValue: 0
  }
}, {
  appDb,
  tableName: 'Discounts',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "Discounts_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

// Discounts.hasOne(Merchants);
// Merchants.belongsToMany(Discounts)

module.exports = Discounts;
