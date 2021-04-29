import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);

	const handleSubmit = e => {};

	return (
		<header className="header">
			{/* <nav>
				<ul className="menu">
					<li>
						<NavLink to="/businesses">All businesses</NavLink>
					</li>
					<li>
						<NavLink to="/login">Log In</NavLink>
					</li>
					<li className="signup-btn">
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
				</ul>
			</nav>
			<section className="search">
				<img className="page-logo" src='./logo.png' alt=""/>
				<form className="search-bar" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search..."
						class="search-input"
					/>
					<button type="submit">
						<img className="" />
					</button>
				</form>
			</section> */}
		</header>
	);
}

export default Header;
