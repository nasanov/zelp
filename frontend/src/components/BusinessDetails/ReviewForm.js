import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../store/reviews';
// import './ReviewForm.css'

function ReviewForm({ business_id }) {
	// get business id
	const user = useSelector(state => state.session.user);
	const dispatch = useDispatch();
	const [review_text, setReviewText] = useState('');
	const [rating, setRating] = useState('1');

	const handleSubmit = e => {
		e.preventDefault();
		const newData = {
			review_text,
			rating,
			user_id: user.id,
			business_id: parseInt(business_id),
			createdAt: new Date()
		};
		dispatch(addReview(newData));
		setReviewText('');
		setRating(0);
	};

	return (
		<form onSubmit={handleSubmit}>
			<select value={rating} onChange={e => setRating(e.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
			</select>
			<input
				placeholder="Add review"
				type="text"
				value={review_text}
				onChange={e => setReviewText(e.target.value)}
			></input>
			<button>Add review</button>
		</form>
	);
}

export default ReviewForm;
