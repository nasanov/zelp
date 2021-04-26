'use strict';
module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		'Review',
		{
			review_text: {
				type: DataTypes.TEXT,
			},
			rating: {
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Review.associate = function (models) {
		Review.belongsTo(models.User, { foreignKey: 'user_id' });
		Review.belongsTo(models.Business, { foreignKey: 'movie_id' });
	};
	return Review;
};
