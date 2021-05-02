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
	// console.log(topCat);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<>
			<section className="category-businesses">
				<div className="category-heading-wrapper">
					<h2>Top Categories</h2>
				</div>
				<div className="category-wrapper">
					{topCat.map((cat, index) => {
						return (
							<div key={index} className="category-block">
								<NavLink to={`/categories/${cat.id}`} className="category-businesses__col">
									<h1 key={cat.id} className="category-businesses__label">
										{cat.name}
									</h1>
								</NavLink>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
}
