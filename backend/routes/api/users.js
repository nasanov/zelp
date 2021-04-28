const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router()

const  validateSignup = [
	check('email')
		.exists({checkFalsy: true})
		.isEmail()
		.withMessage('Please provide a valid email address.'),
	check('username')
		.exists({checkFalsy: true})
		.isLength({min: 4})
		.withMessage('Please provide a username with at least 4 characters.'),
	check('username')
		.not()
		.isEmail()
		.withMessage('Username cannot ve an email.'),
	check('password')
		.exists({checkFalsy: true})
		.isLength({min: 6})
		.withMessage('Password must be at least 6 characters'),
	handleValidationErrors
]

// POST /api/users
// User Sign up
// ! why post('') is empty

// router.get('/', asyncHandler(async (req, res) => {
// 	const user = await User.fingByPk()

// 	await setTokenCookie(res, user)

// 	return res.json({
// 		user
// 	})
// }))

router.post('/', validateSignup, asyncHandler(async (req, res) => {
	const { email, password, username } = req.body;
	const user = await User.signup({email, password, username})

	await setTokenCookie(res, user)

	return res.json({
		user
	})
}))


module.exports = router
