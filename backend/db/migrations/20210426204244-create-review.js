'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				references: { model: 'Users' },
      },
      business_id: {
				allowNull: false,
        type: Sequelize.INTEGER,
				references: { model: 'Businesses' },
      },
      review_text: {
				allowNull: false,
        type: Sequelize.TEXT
      },
      rating: {
				allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};
