import { useEffect, useState } from 'react';
import { editReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import './EditForm.css';

export default function EditForm({ review, setShowForm }) {
	const { id } = review;
	// console.log()
	const [review_text, setReviewText] = useState(review.review_text);
	const [rating, setRating] = useState(review.rating);
	const dispatch = useDispatch();

	const editHandler = e => {
		e.preventDefault();
		const newData = {
			id,
			review_text,
			rating,
		};
		dispatch(editReview(newData));
		setShowForm(false);
	};
	useEffect(() => {
		setReviewText(review_text);
		setRating(rating);
	}, [review_text, rating]);

	return (
		<>
			<h3 className="edit-review-header">Edit review</h3>
			<form onSubmit={editHandler} className="edit-review-form">
				<select value={rating} onChange={e => setRating(e.target.value)} className="edit-review-dropdown">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
				<textarea
					placeholder="New review"
					type="text"
					value={review_text}
					onChange={e => setReviewText(e.target.value)}
					required
					className="edit-review-textarea"
				></textarea>
				<button className="edit-review-form-btn">Edit review</button>
			</form>
		</>
	);
}
