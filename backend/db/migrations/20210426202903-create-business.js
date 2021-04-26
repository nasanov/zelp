'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
				allowNull: false,
        type: Sequelize.STRING(255)
      },
      image_url: {
				allowNull: false,
        type: Sequelize.STRING(255)
      },
      is_closed: {
        type: Sequelize.BOOLEAN
      },
      price: {
        type: Sequelize.STRING(5)
      },
      phone: {
        type: Sequelize.STRING(50)
      },
      hours: {
        type: Sequelize.STRING(50)
      },
      photos: {
        type: Sequelize.ARRAY(Sequelize.STRING(255))
      },
      about: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING(255)
      },
      address: {
        type: Sequelize.STRING(255)
      },
      coordinates: {
        type: Sequelize.ARRAY(Sequelize.STRING(255))
      },
      state: {
        type: Sequelize.STRING(255)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
				defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Businesses');
  }
};
