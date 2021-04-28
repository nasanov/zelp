const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

router.get(
	'/',
	asyncHandler(async function (req, res) {
		const reviews = await Review.findAll();
		console.log('/api/reviews/:id/');
		return res.json(reviews);
	})
);

router.get(
	'/:id',
	asyncHandler(async function (req, res) {
		const { id } = req.params;
		console.log('/api/reviews/:id/');
		const reviews = await Review.findAll({
			where: {
				business_id: id,
			},
			order: [['createdAt', 'DESC']],
		});
		return res.json(reviews);
	})
);

router.post(
	'/:id',
	asyncHandler(async (req, res) => {
		// add review for a business
		const { review_text, rating, userId, business_id } = req.body;
	})
);

router.patch(
	'/:id',
	asyncHandler(async (req, res) => {
		// edit review for a business
	})
);

router.delete(
	'/:id',
	asyncHandler(async (req, res) => {
		// delete review for a business
	})
);

module.exports = router;
