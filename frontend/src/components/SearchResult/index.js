import { useSelector } from 'react-redux';
import SearchBlock from './SearchBlock';

export default function SearchResult() {
	const businesses = useSelector(state => state.business.foundBusinesses);
	// console.log("helllo", businesses)
	let arr = [];
	for (let i in businesses) {
		arr.push(businesses[i]);
	}
	// console.log(arr);
	return (
		<div className="businesses_container">
			<h1 className="all-biz-header">Search results</h1>
			{arr.map((business, index) => {
				return <SearchBlock business={business} index={index} key={business.id} />;
			})}
		</div>
	);
}
