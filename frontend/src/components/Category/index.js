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
			<h1 className="all-biz-header">{categories[id]?.name}</h1>
			{businesses?.map((business, index) => {
				return <CategoryBlock business={business} index={index} key={business.id} />;
			})}
		</div>
	);
}
