import BusinessBlock from './BusinessBlock';
import './Businesses.css'

export default function Businesses({ businesses }) {
	let arr = [];
	for (let i in businesses) {
		arr.push(businesses[i]);
	}
	// console.log(arr);

	return (
		<div className="businesses_container">
			<h1 className="all-biz-header">All businesses page</h1>
			{arr.map(business => {
				return <BusinessBlock business={business} key={business.id} />;
			})}
		</div>
	);
}
