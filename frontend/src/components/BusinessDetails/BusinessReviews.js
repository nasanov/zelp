import ReviewForm from './ReviewForm';
import EditForm from './EditForm';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReview } from '../../store/reviews';
import './BusinessReviews.css';
import rating_1 from '../../images/small_1@2x.png';
import rating_2 from '../../images/small_2@2x.png';
import rating_3 from '../../images/small_3@2x.png';
import rating_4 from '../../images/small_4@2x.png';
import rating_5 from '../../images/small_5@2x.png';
// import * as sessionActions from '../../store/session';

export default function BusinessReviews({ business_id }) {
	const rating = [rating_1, rating_2, rating_3, rating_4, rating_5];
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
			<h1 className="all-biz-header">Reviews</h1>
			<div className="reviews-container">
				{sortedReviews.map(review => {
					// review.createdAt = new Date(review.createdAt)
					let reviewDate =
						new Date(review?.createdAt).toDateString() + ' ' + new Date(review?.createdAt).toLocaleTimeString();
					// onClick={/* show form */}
					return (
						<div key={review?.id} className="review-block">
							{review?.user_id === sessionUser?.id ? (
								<div className="own-review-btns">
									<button onClick={() => setShowForm(!showForm)} className="edit-review-btn">Edit</button>
									{showForm ? <EditForm review={review} setShowForm={setShowForm} /> : null}
									<button onClick={e => deleteHandler(e, review?.id)} className="delete-review-btn">Delete</button>
								</div>
							) : null}
							<div className="review-username">Username: {review?.User?.username}</div>
							<div className="review-rating">
								<img src={rating[review?.rating - 1]} alt="rating_stars" style={{ height: '16px' }}></img>{' '}
							</div>
							<div className="review-text">{review?.review_text}</div>
							<div className="review-created-date">Created: {reviewDate}</div>
						</div>
					);
				})}
				{sessionUser && isReviewed === false && <ReviewForm business_id={business_id} />}
			</div>
		</>
	);
}
