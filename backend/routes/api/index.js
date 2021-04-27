const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const businessesRouter = require('./businesses');
const reviewsRouter = require('./reviews');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessesRouter);
router.use('/reviews', reviewsRouter);

module.exports = router;
