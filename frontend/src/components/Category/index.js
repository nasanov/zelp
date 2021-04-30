// import CategoriesBlock from './CategoriesBlock'
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getCategories } from '../../store/categories';
// import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CategoryBlock from './CategoryBlock';

export default function Category() {
	let { id } = useParams();
	const categories = useSelector(state => state.categories);
	let businesses = categories[id]?.Businesses;
	return (
		<div className="businesses_container">
			<h1>{categories[id]?.name}</h1>
			{businesses?.map(business => {
				return <CategoryBlock business={business} key={business.id} />;
			})}
		</div>
	);
}
