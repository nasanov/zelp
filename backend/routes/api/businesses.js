const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { Business } = require('../../db/models')

router.get('/', asyncHandler(async (req,res) => {
	// get all businesses
	let result = await Business.findAll()
	// console.log(result)
	res.json(result)
}))

router.get('/:id', asyncHandler(async (req,res) => {
	// get one business
}))

router.get('/:id/reviews', asyncHandler(async (req,res) => {
	// get reviews for 1 business
}))

router.post('/:id/reviews', asyncHandler(async (req,res) => {
	// add review for a business
	const { review_text, rating, userId, business_id } = req.body;
}))

router.patch('/:id/reviews/:id', asyncHandler(async (req,res) => {
	// edit review for a business
}))

router.delete('/:id/reviews/:id', asyncHandler(async (req,res) => {
	// delete review for a business
}))

module.exports = router;
