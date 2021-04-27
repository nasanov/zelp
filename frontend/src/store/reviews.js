const LOAD = 'reviews/LOAD';
const ADD_ONE = 'reviews/ADD_ONE';


const load = list => ({
	type: LOAD,
	list,
});

export const addOneReview = review => ({
	type: ADD_ONE,
	review,
});

export const addReview = obj => async dispatch => {
	console.log(obj);
	const response = await fetch(`/api/reviews`, {
		method: 'POST',
		body: JSON.stringify(obj),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		const review = await response.json();
		console.log(review);
		dispatch(addOneReview(review));
		return review;
	}
};


const initialState = {
	list: [],
};

const reviewsReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD: {
			const allReviews = {};
			action.list.forEach(review => {
				allReviews[review.id] = review;
			});
			return {
				...allReviews,
				...state,
				list: action.list,
			};
		}
		case ADD_ONE: {
			//
		}
		default:
			return state;
	}
};

export default reviewsReducer;
