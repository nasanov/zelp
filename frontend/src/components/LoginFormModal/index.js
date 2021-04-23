// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal() {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<li>
				<button onClick={() => setShowModal(true)} className="buttonSecondary">
					Log In
				</button>
			</li>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<LoginForm />
				</Modal>
			)}
		</>
	);
}

export default LoginFormModal;
