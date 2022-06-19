const appDb = require('../../config/appDatabase')
const Discounts = require('./Discounts')
const { DataTypes } = require('sequelize');

const Merchants = appDb.define('Merchants', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(1024),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  firstTime: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  subscription: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  appDb,
  tableName: 'Merchants',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: "Merchants_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

Merchants.hasMany(Discounts, {as: 'discounts', foreignKey: 'merchantid'});
Discounts.belongsTo(Merchants, {as: 'merchant', foreignKey: 'merchantid'})


module.exports = Merchants;
