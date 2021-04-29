import React from 'react'; // { useState }
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink } from 'react-router-dom'; // Redirect,
import * as sessionActions from '../../store/session';
import logo from '../../images/logo.png';

import './HomePage.css';

function HomePage({ businesses }) {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);

	const logout = e => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = (
				<li>
					<NavLink to="/" onClick={logout} className="home-signup-btn">
						Log out
					</NavLink>
				</li>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup" className="home-signup-btn">
						Sign Up
					</NavLink>
				</li>
			</>
		);
	}
	// const handleSearch = e => {}; search bar handle

	return (
		<>
			<header className="header">
				<nav className="home-nav">
					<ul className="menu">
						<li>
							<NavLink to="/businesses">All businesses</NavLink>
						</li>
						{sessionLinks}
					</ul>
				</nav>
				<section className="search-logo">
					<NavLink to="/">
						<img src={logo} className="page-logo" alt="" />
					</NavLink>

					{/* <form className="search-bar" onSubmit={handleSubmit}>
						<input type="text" placeholder="Search..." className="search-input" />
						<button type="submit" className="search-btn"></button>
					</form> */}
					<div className="search">
						<input type="text" className="searchTerm" placeholder="Search ..." />
						<button type="submit" className="searchButton">
							<i className="fa fa-search"></i>
						</button>
					</div>
				</section>
			</header>
			<div>
				<h1>Zelp in Houston</h1>
			</div>
		</>
	);
}

export default HomePage;
