'use strict';
module.exports = (sequelize, DataTypes) => {
	const Business = sequelize.define(
		'Business',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(255),
			},
			image_url: {
				allowNull: false,
				type: DataTypes.STRING(255),
			},
			is_closed: {
				type: DataTypes.BOOLEAN,
			},
			price: {
				type: DataTypes.STRING(5),
			},
			phone: {
				type: DataTypes.STRING(50),
			},
			hours: {
				type: DataTypes.STRING(50),
			},
			photos: {
				type: DataTypes.ARRAY(DataTypes.STRING(255)),
			},
			about: {
				type: DataTypes.TEXT,
			},
			url: {
				type: DataTypes.STRING(255),
			},
			address: {
				type: DataTypes.STRING(255),
			},
			coordinates: {
				type: DataTypes.ARRAY(DataTypes.STRING(255)),
			},
			state: {
				type: DataTypes.STRING(255),
			},
			rating: {
				type: DataTypes.STRING(1),
			},
		},
		{}
	);
	Business.associate = function (models) {
		Business.hasMany(models.Review, { foreignKey: 'business_id' });
		const columnMapping = {
			through: 'BusinessCategory', // This is the model name referencing the
			//  join table.
			otherKey: 'category_id',
			foreignKey: 'business_id',
		};
		Business.belongsToMany(models.Category, columnMapping);
	};
	return Business;
};
