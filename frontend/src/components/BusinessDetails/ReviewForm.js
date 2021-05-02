import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../store/reviews';
import './ReviewForm.css';

function ReviewForm({ business_id }) {
	// get business id
	const user = useSelector(state => state.session.user);
	const dispatch = useDispatch();
	const [review_text, setReviewText] = useState('');
	const [rating, setRating] = useState('1');

	const handleSubmit = e => {
		e.preventDefault();
		const payload = {
			review_text,
			rating,
			user_id: user.id,
			business_id: parseInt(business_id),
			createdAt: new Date(),
		};
		dispatch(addReview(payload));
		// setReviewText('');
		// setRating(0);
	};

	return (
		<>
			<h3 className="review-header">Review Form</h3>
			<form onSubmit={handleSubmit} className="review-form">
				<select value={rating} onChange={e => setRating(e.target.value)} className="review-dropdown">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<textarea
					placeholder="Add review"
					type="text"
					value={review_text}
					onChange={e => setReviewText(e.target.value)}
					required
					className="review-textarea"
				></textarea>
				<button className="add-review-btn">Add review</button>
			</form>
		</>
	);
}

export default ReviewForm;
