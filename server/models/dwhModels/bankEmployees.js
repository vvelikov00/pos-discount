const dwhDb = require('../../config/dwhDatabase')
const { DataTypes } = require('sequelize');

const bankEmployees = dwhDb.define('bankEmployees', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(256),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(1024),
    allowNull: true
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true
  }
}, {
  dwhDb,
  tableName: 'bankEmployees',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "bankEmployees_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = bankEmployees;
