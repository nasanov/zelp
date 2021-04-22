const { validationResult } = require('express-validator');
// gathers the results of all the check middlewares that were run to determine which parts of the body are valid and invalid.

// middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, res, next) => {
	const validationErrors = validationResult(req);

	if (!validationErrors.isEmpty()) {
		const errors = validationErrors.array().map(error => `${error.msg}`);

		const err = Error('Bad request.');
		err.errors = errors;
		err.status = 400;
		err.title = 'Bad request.';
		next(err);
	}
	next();
};

module.exports = {
	handleValidationErrors,
};
