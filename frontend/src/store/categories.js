import { csrfFetch } from './csrf';

const LOAD = 'categories/LOAD';

const load = categories => ({
	type: LOAD,
	categories,
});

export const getCategories = () => async dispatch => {
	const res = await csrfFetch(`/api/categories`);
	// console.log('getcaategories', res);
	if (res.ok) {
		const categories = await res.json();
		dispatch(load(categories));
	} else {
		throw res;
	}
};

const categoriesReducer = (state = {}, action) => {
	// console.log(action);
	switch (action.type) {
		case LOAD: {
			let newState = { ...state };
			action.categories.forEach(category => {
				newState[category.id] = category;
			});
			return newState;
		}
		default:
			return state;
	}
};

export default categoriesReducer;
