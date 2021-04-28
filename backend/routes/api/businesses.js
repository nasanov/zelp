const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const { Business } = require('../../db/models')

// get all businesses
router.get('/', asyncHandler(async (req,res) => {
	// get all businesses
	let result = await Business.findAll()
	// console.log(result)
	res.json(result)
}))

// get one business
router.get('/:id', asyncHandler(async (req,res) => {
	const {id} = req.params;
	// console.log(id)
	let result = await Business.findByPk(id)
	// console.log(result)
	res.json(result)
}))

module.exports = router;
