const router = require('express').Router();
const sessionRouter = require('./session');
const usersRouter = require('./users');
const businessesRouter = require('./businesses');
const reviewsRouter = require('./reviews');
const searchRouter = require('./search');
const categoriesRouter = require('./categories');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/businesses', businessesRouter);
router.use('/reviews', reviewsRouter);
router.use('/search', searchRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
