const express = require('express')
const router = express.Router();
const apiRouter = require('./api');

router.use('/api', apiRouter);

router.get('/hello/world', (req, res) => {
	// setting a cookie on the response with the name of XSRF-TOKEN to the value of the req.csrfToken method's return.
	res.cookie('XSRF-TOKEN', req.csrfToken());
	res.send('Hello world !')
})

module.exports = router;
