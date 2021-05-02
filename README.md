[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://zelp-app.herokuapp.com/)

# Zelp

Zelp is a web application clone based on Yelp that allows people to connect with the local businesses as well as leave reviews for other users to decide where to go and whose service to use. Zelp was created using Javascript, React, Redux, Express, and PostgresSQL.

[Live Link!](https://zelp-app.herokuapp.com/) <br>
[Github Page](https://github.com/nasanov/zelp/) <br>
Check out the project [Wiki Page](https://github.com/nasanov/zelp/wiki) for specifics of the MVP Feature List, Routes, Components


## Overall Structure
### Database Schema
![db_schema](https://github.com/nasanov/zelp/blob/main/planning/db/db_image-v2.png)
### Backend
The application was built using Javascript with a PostgreSQL database. back end was created using Express. It primarily functions as a REST API to provide JSON objects to React.

### Frontend
The front end is built using React/Redux and CSS.

### Technologies used
Backend:
- express
- express-validator
- sequelize
- bcrypt
- JSONWebToken
- PostgreSQL
- csurf
- cors
- cookie-parser

Frontend:
- JavaScript
- HTML, CSS
- React, Redux
- Google Maps API


## Primary Components
### User Authorization
User authorization is handled in JavaScript using BCrypt for password hashing. These hashed passwords are saved to the database instead of the plain-text passwords. Upon login, the password that a user enters is rehashed and checked against the hashed password in the database to verify credentials.
![login](https://github.com/nasanov/zelp/blob/main/planning/login.png)
### sign-in

CsrfAuth
Zelp uses Csrf Authentication to allow users to sign in.

### Home Page
home-page
![main](https://github.com/nasanov/zelp/blob/main/planning/main-page.png) The homepage Highlights 5 top rated businesses in Houston, and categories with the highest number of businesses.

Businesses
The movies page, allows users to browse through a wide selection of over 900 movies, arranged by sets of 50. The search feature allows users to look up certain movies based on keywords and lists them all out.
![details](https://github.com/nasanov/zelp/blob/main/planning/details.png)

### Stretch Goals
Users profiles.
User can register as a business owner and create business page.
Responsive design.
