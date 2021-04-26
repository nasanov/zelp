'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
		let users = [
			{
				email: 'demo@user.io',
				username: 'demo-user',
				hashedPassword: bcrypt.hashSync('password'),
			}
		]

    for (let i = 0; i < 29; i++) {
      users.push({
        email: faker.internet.email(),
        username: faker.internet.userName(),
        hashedPassword: await bcrypt.hash(faker.internet.password(), 10)
      })
    }
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['demo-user'] }
    }, {});
  }
};
