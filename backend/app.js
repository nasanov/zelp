const express = require('express');
const morgan = require('morgan'); // logging information about server requests/responses
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet'); // security middleware
const cookieParser = require('cookie-parser');

const { environment } = require('./config');
const isProduction = environment === 'production';
const app = express();

app.use(morgan('dev'));

// cookie-parser middleware for parsing cookies and the express.json middleware for parsing JSON bodies of requests with Content-Type of "application/json".
app.use(cookieParser());
app.use(express.json());



// * Security Middleware
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

module.exports = app;
