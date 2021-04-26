'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Categories',
			[
				{
					name: 'Aerial Fitness',
				},
				{
					name: 'Aquariums',
				},
				{
					name: 'Axe Throwing',
				},
				{
					name: 'Barre Classes',
				},
				{
					name: 'Baseball Fields',
				},
				{
					name: 'Bike Rentals',
				},
				{
					name: 'Bike Repair/Maintenance',
				},
				{
					name: 'Bikes',
				},
				{
					name: 'Boot Camps',
				},
				{
					name: 'Boxing',
				},
				{
					name: 'Cardio Classes',
				},
				{
					name: 'Child Care & Day Care',
				},
				{
					name: 'Community Service/Non-Profit',
				},
				{
					name: 'Cycling Classes',
				},
				{
					name: 'Dance Schools',
				},
				{
					name: 'Dog Parks',
				},
				{
					name: 'Escape Games',
				},
				{
					name: 'Fitness & Instruction',
				},
				{
					name: 'Gyms',
				},
				{
					name: 'Hiking',
				},
				{
					name: 'Interval Training Gyms',
				},
				{
					name: 'Kickboxing',
				},
				{
					name: 'Kids Activities',
				},
				{
					name: 'Local Flavor',
				},
				{
					name: 'Muay Thai',
				},
				{
					name: 'Nutritionists',
				},
				{
					name: 'Parks',
				},
				{
					name: 'Performing Arts',
				},
				{
					name: 'Pilates',
				},
				{
					name: 'Playgrounds',
				},
				{
					name: 'Pole Dancing Classes',
				},
				{
					name: 'Seafood',
				},
				{
					name: 'Social Clubs',
				},
				{
					name: 'Stadiums & Arenas',
				},
				{
					name: 'Swimming Pools',
				},
				{
					name: 'Train Stations',
				},
				{
					name: 'Trainers',
				},
				{
					name: 'Venues & Event Spaces',
				},
				{
					name: 'Yoga',
				},
				{
					name: 'Zoos',
				},
				{
					name: 'Dance Studios',
				},
				{
					name: 'Sports Clubs',
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Categories', null, {});
	},
};
