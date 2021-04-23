import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

function LoginForm() {
	const dispatch = useDispatch();
	const [credential, setCredential] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(async res => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	return (
		<div className="">
			<h1>Login</h1>
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
						type="text"
						value={credential}
						onChange={e => setCredential(e.target.value)}
						required
						placeholder="Username or Email"
					/>
				</label>
				<label>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
						placeholder="Password"
					/>
				</label>
				<button type="submit" id="submitButton" className="buttonPrimary">
					Log In
				</button>
			</form>
		</div>
	);
}

export default LoginForm;
