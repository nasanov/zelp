const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { BusinessCategory } = require('../../db/models');
const { Category } = require('../../db/models');
const { Business } = require('../../db/models');
const Sequelize = require('sequelize')

// get all businesses
router.get(
	'/',
	asyncHandler(async (req, res) => {
		// get all businesses
		let result = await Category.findAll();
		console.log(result)
		res.json(result);
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
