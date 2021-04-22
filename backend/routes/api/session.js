const express = require('express')
const asyncHandler = require('express-async-handler')

const { setTokenCookie, restoreUser } = require('../../utils/auth')
const { User } = require('../../db/models')

const router = express.Router()

// GET /api/session
router.get('/', restoreUser, (req, res) => {
	const { user } = req;
	if (user) {
		return res.json({
			user: user.toSafeObject()
		})
	} else {
		return res.json({})
	}
})

// POST /api/session
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

// DELETE /api/session
router.delete(
  '/',
  (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
  }
);

module.exports = router
