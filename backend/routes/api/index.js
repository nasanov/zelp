const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const businessesRouter = require('./businesses');
const reviewsRouter = require('./reviews');
const searchRouter = require('./search');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessesRouter);
router.use('/reviews', reviewsRouter);
router.use('/search', searchRouter);

module.exports = router;
