var DataTypes = require("sequelize").DataTypes;
var _Cardholders = require("./Cardholders");
var _Discounts = require("./Discounts");
var _Merchants = require("./Merchants");
var _POSTerminals = require("./POSTerminals");
var _bankEmployees = require("./bankEmployees");

function initModels(sequelize) {
  var Cardholders = _Cardholders(sequelize, DataTypes);
  var Discounts = _Discounts(sequelize, DataTypes);
  var Merchants = _Merchants(sequelize, DataTypes);
  var POSTerminals = _POSTerminals(sequelize, DataTypes);
  var bankEmployees = _bankEmployees(sequelize, DataTypes);


  return {
    Cardholders,
    Discounts,
    Merchants,
    POSTerminals,
    bankEmployees,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
