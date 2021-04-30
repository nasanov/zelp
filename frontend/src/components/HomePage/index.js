import React from 'react'; // { useState }
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom'; // Redirect,
import * as sessionActions from '../../store/session';
import logo from '../../images/logo.png';
import Content from './Content';
import Categories from  './Categories'
import { useEffect, useState } from 'react';
import { getSearchResults } from '../../store/businesses';
import './HomePage.css';

function HomePage({ businesses }) {
	const dispatch = useDispatch();
	const history = useHistory();
	const sessionUser = useSelector(state => state.session.user);
	const [searchText, setSearchText] = useState('');

	const logout = e => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	const handleSearch = e => {
		e.preventDefault();
		// console.log(e.target.elements[0].value);
		dispatch(getSearchResults(e.target.elements[0].value));
		history.push('/search');
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

					<form className="search" onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Search..."
							className="searchTerm"
							value={searchText}
							onChange={e => setSearchText(e.target.value)}
						/>
						<button type="submit" className="searchButton">
							<i className="fa fa-search"></i>
						</button>
					</form>
				</section>
			</header>
			<div>
				<h1>Zelp in Houston</h1>
				{/* <Content /> */}
				<Categories />
			</div>
			{/* <Footer /> */}
		</>
	);
}

export default HomePage;
