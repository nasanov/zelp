'use strict';
module.exports = (sequelize, DataTypes) => {
	const Category = sequelize.define(
		'Category',
		{
			name: {
				type: DataTypes.STRING(255),
				allowNull: false,
				unique: true,
			},
		},
		{}
	);
	Category.associate = function (models) {
		const columnMapping = {
		  through: 'BusinessCategory',
		  otherKey: 'business_id',
		  foreignKey: 'category_id'
		 }
		 Category.belongsToMany(models.Business, columnMapping)
	};
	return Category;
};
