import { csrfFetch } from './csrf';
const LOAD = 'categories/LOAD';
const load = categories => ({
	type: LOAD,
	categories,
});


export const getCategories = () => async dispatch => {
	const res = await csrfFetch(`/api/categories`);
	if (res.ok) {
		const categories = await res.json();
		dispatch(load(categories));
	}
};

const categoryReducer = (state = {}, action) => {
	// console.log(action);
	switch (action.type) {
		case LOAD: {
			let newState = { ...state };
			action.reviews.forEach(review => {
				newState[review.id] = review;
			});
			return newState;
		}
};

export default categoryReducer;
