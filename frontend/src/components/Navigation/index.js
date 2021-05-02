import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import { useState } from 'react';
import { getSearchResults } from '../../store/businesses';
import logo from '../../images/logo.png';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory();
	const dispatch = useDispatch();
	const logout = e => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	const [searchText, setSearchText] = useState('');
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
				<NavLink to="/" onClick={logout} className="nav-logout-btn">
					Log out
				</NavLink>
			</li>
		);
	} else {
		sessionLinks = (
			<>
				<li>
					<NavLink to="/login" className="nav-login-btn">Log In</NavLink>
				</li>
				<li>
					<NavLink to="/signup" className="nav-signup-btn">Sign Up</NavLink>
				</li>
			</>
		);
	}

	return (
		<nav className="main-nav">
			<NavLink to="/">
				<img src={logo} className="nav-logo" alt="nav-logo" height="70" />
			</NavLink>
			<form className="nav-search" onSubmit={handleSearch}>
				<input
					type="text"
					placeholder="Search..."
					className="nav-searchTerm"
					value={searchText}
					onChange={e => setSearchText(e.target.value)}
				/>
				<button type="submit" className="nav-searchButton">
					<i className="fa fa-search"></i>
				</button>
			</form>
			<ul className="menu">{isLoaded && sessionLinks}</ul>
		</nav>
	);
}

export default Navigation;
