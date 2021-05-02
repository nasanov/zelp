const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Business } = require('../../db/models');
const { Review } = require('../../db/models');
const { Category } = require('../../db/models');
const Sequelize = require('sequelize');

// get all businesses
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// get all businesses
		if (req.query.name) {
			let searchQuery = {
				limit: 20,
				order: [['id', 'DESC']],
			};

			if (req.query.name) {
				searchQuery.where = { name: { [Sequelize.Op.iLike]: `%${req.query.name}%` } };
			}
			try {
				businesses = await Business.findAll(searchQuery);
				res.json(businesses);
				// console.log(businesses);
			} catch (e) {
				console.error(e);
			}
		} else {
			let result = await Business.findAll({
				include: [Review, Category],
			});
			res.json(result);
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
