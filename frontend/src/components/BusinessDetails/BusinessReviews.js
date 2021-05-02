import ReviewForm from './ReviewForm';
import EditForm from './EditForm';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
// import * as sessionActions from '../../store/session';

export default function BusinessReviews({ business_id }) {
	const dispatch = useDispatch();

	const sessionUser = useSelector(state => state.session.user);
	const reviews = Object.values(useSelector(state => state.reviews));
	let sortedReviews = reviews.sort((a, b) => b.id - a.id);

	const [showForm, setShowForm] = useState(false);

	const deleteHandler = (e, id) => {
		// console.log(id);
		e.preventDefault();
		dispatch(deleteReview(id));
	};

	let isReviewed = false;
	for (const review of sortedReviews) {
		if (review?.user_id === sessionUser?.id) {
			isReviewed = true;
		}
	}

	return (
		<>
			<h1>Reviews</h1>
			<div className="reviews-container">
				{sortedReviews.map(review => {
					// review.createdAt = new Date(review.createdAt)
					let reviewDate =
						new Date(review?.createdAt).toDateString() + ' ' + new Date(review?.createdAt).toLocaleTimeString();
					// onClick={/* show form */}
					return (
						<div key={review?.id}>
							{review?.user_id === sessionUser?.id ? (
								<div>
									<button onClick={() => setShowForm(!showForm)}>Edit</button>
									{showForm ? <EditForm review={review} setShowForm={setShowForm} /> : null}
									<button onClick={e => deleteHandler(e, review?.id)}>Delete</button>
								</div>
							) : null}
							<div>Rating: {review?.rating}</div>
							<div>Review text: {review?.review_text}</div>
							<div>Created: {reviewDate}</div>
							<div>Username: {review?.User?.username}</div>
						</div>
					);
				})}
			</div>
			{sessionUser && isReviewed === false && <ReviewForm business_id={business_id} />}
		</>
	);
}
