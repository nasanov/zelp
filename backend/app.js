const express = require('express');
const morgan = require('morgan'); // logging information about server requests/responses
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet'); // security middleware
const cookieParser = require('cookie-parser');
const { ValidationError } = require('sequelize');

const { environment } = require('./config');
const isProduction = environment === 'production';
const app = express();


app.use(morgan('dev'));

// cookie-parser middleware for parsing cookies and the express.json middleware for parsing JSON bodies of requests with Content-Type of "application/json".
app.use(cookieParser());
app.use(express.json());

/***********************/
/* Security Middleware */
/***********************/

if (!isProduction) {
	// only allow CORS (Cross-Origin Resource Sharing) in development using the cors middleware because React frontend will be served from a different server than the Express server. CORS isn't needed in production since all of our React and Express resources will come from the same origin
	app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
);

// Set the _csrf token and create req.csrfToken method
app.use(
	csurf({
		cookie: {
			secure: isProduction,
			sameSite: isProduction && 'Lax',
			httpOnly: true,
		},
	})
);

// has to be after all middlewares
const routes = require('./routes');
app.use(routes);

/******************/
/* Error handling */
/******************/

// Resource Not Found Error-Handler
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
	// ! _req, _res with underscore, because we are not using them?
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
	// next invoked with nothing means error handlers defined after this middleware will not be invoked
});

// Sequelize Error-Handler
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = 'Validation error';
  }
  next(err);
});

// Error Formatter Error-Handler
// The last error handler is for formatting all the errors before returning a JSON response with the error message, array, and stack trace (if the environment is in development) with the status code of the error message.
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});



module.exports = app;
