import { useEffect, useState } from "react"
import { editReview } from '../../store/reviews';
import { useDispatch} from 'react-redux';

export default function EditForm({review, setShowForm}) {
	const {id } = review
	// console.log()
	const [review_text, setReviewText] = useState(review.review_text)
	const [rating, setRating] = useState(review.rating)
	const dispatch = useDispatch();

	const editHandler = (e) => {
		e.preventDefault();
		const newData = {
			id,
			review_text,
			rating,
		};
		dispatch(editReview(newData))
		setShowForm(false)
	};
	useEffect(() => {
		setReviewText(review_text)
		setRating(rating)
	}, [review_text, rating])


	return (
		<form onSubmit={editHandler}>
		<select value={rating} onChange={e => setRating(e.target.value)}>
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
		></textarea>
		<button>Edit review</button>
	</form>
	)
}
