import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from '../../store/categories';
import { NavLink } from 'react-router-dom';

export default function Categories() {
	const categories = useSelector(state => state.categories);
	// console.log(categories.Business.length);
	let arr = [];
	for (let i in categories) {
		arr.push(categories[i]);
		i++;
		// console.log(categories[i]);
	}

	let topCat = arr.filter(el => el.Businesses.length >= 4);
	console.log(topCat);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<>
			<h1>Top Categories</h1>
			{topCat.map(cat => {
				return (
					<>
						<NavLink to={`/categories/${cat.id}`}>
							<h1 key={cat.id}>{cat.name}</h1>
						</NavLink>
						;
					</>
				);
			})}
		</>
	);
}
