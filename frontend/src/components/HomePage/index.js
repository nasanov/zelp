import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import logo from '../../images/logo.png'

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
				<li>
					<NavLink to="/" onClick={logout} className="signup-btn">Log out</NavLink>
				</li>
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
					<div class="search">
							<input type="text" class="searchTerm" placeholder="What are you looking for?"/>
							<button type="submit" class="searchButton">
								<i class="fa fa-search"></i>
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
