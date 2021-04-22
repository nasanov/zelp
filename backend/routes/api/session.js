const express = require('express')
const asyncHandler = require('express-async-handler')

const { setTokenCookie, restoreUser } = require('../../utils/auth')
const { User } = require('../../db/models')

const router = express.Router()

router.post('/', asyncHandler(async (req, res, next) => {
	const { credential, password } = req.body
	console.log("******************************")
	console.log("******************************", credential, password)
	console.log("******************************")

	const user = await User.login({credential, password})
	if (!user) {
		const err = new Error('Login failed')
		err.status = 401;
		err.title = 'Login Failed'
		err.errors = ['The Provided credential were invalid.']
		return next(err)
	}
	await setTokenCookie(res, user)
	return res.json({
		user,
	})
}))

module.exports = router
