const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Business } = require('../../db/models');

// get all businesses
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// get all businesses
		// let result = await Business.findAll();
		let searchQuery = {
			limit: 20,
			order: [['id', 'DESC']],
		};
		console.log('req query', req.query);
		console.log('req params', req.params);

		if (req.query.name) {
			console.log('************************', req.query.name);
			searchQuery.where = { name: { [Sequelize.Op.iLike]: `%${req.query.name}%` } };
		}
		try {
			businesses = await Business.findAll(searchQuery);
			res.json(businesses);
			// console.log(businesses);
		} catch (e) {
			console.error(e);
		}
		// console.log(result)
		// res.json(result);
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
