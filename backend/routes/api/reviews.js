const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Review } = require('../../db/models');

router.get(
	'/',
	asyncHandler(async function (req, res) {
		const reviews = await Review.findAll();
		console.log('Backend reviews route /api/reviews/');
		console.log(reviews);
		return res.json(reviews);
	})
);

router.get(
	'/:id',
	asyncHandler(async function (req, res) {
		const { id } = req.params;
		const reviews = await Review.findAll({
			where: {
				business_id: id,
			},
			// order: [['createdAt', 'DESC']],
		});
		return res.json(reviews);
	})
);

router.post(
	'/',
	asyncHandler(async (req, res) => {
		// add review for a business
		const { review_text, rating, user_id, business_id, createdAt } = req.body;
		console.log(review_text, rating, business_id, user_id);
		try {
			const newReview = await Review.create({
				review_text,
				rating,
				user_id,
				business_id,
				createdAt,
			});
			res.json(newReview);
		} catch (e) {
			console.log(e);
		}
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
