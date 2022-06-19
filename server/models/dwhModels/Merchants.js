const dwhDb = require('../../config/dwhDatabase')
const { DataTypes } = require('sequelize');

const Merchants = dwhDb.define('Merchants', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(60),
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
  }
}, {
  dwhDb,
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

module.exports = Merchants;
