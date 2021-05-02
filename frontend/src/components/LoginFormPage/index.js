import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../images/logo.png';

function LoginFormPage() {
	const dispatch = useDispatch();
	const sessionUser = useSelector(state => state.session.user);
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	if (sessionUser) return <Redirect to="/" />;

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(async res => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	const demoLogin = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential: 'demo-user', password: 'password' })).catch(async res => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	return (
		<>
			<nav className="loginFormNav">
				<NavLink to="/">
					<img src={logo} className="nav-logo" alt="nav-logo" height="70" />
				</NavLink>
			</nav>
			<div className="login-container">
				<div className="loginWrap">
					<div className="switch-link-container">
						<h1 className="login-form-header">Login to Zelp</h1>
						<span className="switchLinkName">New to Zelp?</span>
						<NavLink to="/signup" className="switchLink">
							Sign up
						</NavLink>
					</div>
					<form onSubmit={handleSubmit}>
						{errors.length ? (
							<div className="errorsContainer">
								<span>The following errors occurred:</span>
								<ul className="errorsList">
									{errors.map((error, idx) => (
										<li key={idx}>{error}</li>
									))}
								</ul>
							</div>
						) : (
							<div></div>
						)}

						<label>
							<input
								id="email"
								type="text"
								value={credential}
								onChange={e => setCredential(e.target.value)}
								required
								placeholder="Username or Email"
								className="login-input"
							/>
						</label>
						<label>
							<input
								id="password"
								type="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								required
								placeholder="Password"
								className="login-input"
							/>
						</label>
						<button type="submit" id="submitButton" className="login-btn">
							Log In
						</button>
						<button id="demoButton" className="demo-btn" onClick={demoLogin}>
							Demo Login
						</button>
					</form>
				</div>
				<div className="loginBanner">
					<img
						src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"
						alt="login-banner"
						className="banner-img"
					/>
				</div>
			</div>
		</>
	);
}

export default LoginFormPage;
