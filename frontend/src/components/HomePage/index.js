import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';

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
				<button onClick={logout} className="buttonSecondary">
					Log Out
				</button>
			</li>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup" className="signup-btn">
						Sign Up
					</NavLink>
				</li>
			</>
		);
	}
	const handleSubmit = e => {};

	return (
		<>
			<header className="header">
				<nav>
					<ul className="menu">
						<li>
							<NavLink to="/businesses">All businesses</NavLink>
						</li>
						{sessionLinks}
						{/* <li>
							<NavLink to="/login">Log In</NavLink>
						</li>
						<li class="signup-btn">
							<NavLink to="/signup">Sign Up</NavLink>
						</li> */}
					</ul>
				</nav>
				<section className="search">
					<img src="/frontend/public/logo.png" className="page-logo" alt="" />
					<form className="search-bar" onSubmit={handleSubmit}>
						<input type="text" placeholder="Search..." className="search-input" />
						<button type="submit">{/* <img className="" /> */}</button>
					</form>
				</section>
			</header>
			<div>
				<h1>Zelp in Houston</h1>
			</div>
		</>
	);
}

export default HomePage;
