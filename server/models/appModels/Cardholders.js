const appDb = require('../../config/appDatabase')
const { DataTypes } = require('sequelize');

const Cardholders = appDb.define('Cardholders', {
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
  cardNumber: {
    type: DataTypes.STRING(30),
    allowNull: true
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
  tableName: 'Cardholders',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: "Cardholders_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

module.exports = Cardholders;
