const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Business } = require('../../db/models');
const Sequelize = require('sequelize');

// get all businesses
router.get(
	'/',
	asyncHandler(async (req, res) => {
		console.log('sdfgsdfgsdfg');
		let searchQuery = {
			limit: 20,
			order: [['id', 'DESC']],
		};

		if (req.query.name) {
			console.log('Search ------------------------------', req.query.name);
			searchQuery.where = { name: { [Sequelize.Op.iLike]: `%${req.query.name}%` } };
		}
		try {
			businesses = await Business.findAll(searchQuery);
			res.json(businesses);
			// console.log(businesses);
		} catch (e) {
			console.error(e);
		}
	})
);

// get one business
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const { id } = req.params;
		// console.log(id)
		let result = await Business.findByPk(id);
		// console.log(result)
		res.json(result);
	})
);

module.exports = router;
