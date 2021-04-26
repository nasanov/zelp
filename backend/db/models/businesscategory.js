'use strict';
module.exports = (sequelize, DataTypes) => {
  const BusinessCategory = sequelize.define('BusinessCategory', {
    business_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  BusinessCategory.associate = function(models) {
    // associations can be defined here
  };
  return BusinessCategory;
};