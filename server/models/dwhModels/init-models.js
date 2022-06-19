var DataTypes = require("sequelize").DataTypes;
var _Merchants = require("./Merchants");
var _POSTerminals = require("./POSTerminals");
var _bankEmployees = require("./bankEmployees");

function initModels(sequelize) {
  var Merchants = _Merchants(sequelize, DataTypes);
  var POSTerminals = _POSTerminals(sequelize, DataTypes);
  var bankEmployees = _bankEmployees(sequelize, DataTypes);


  return {
    Merchants,
    POSTerminals,
    bankEmployees,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
