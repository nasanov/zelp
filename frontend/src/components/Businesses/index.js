import BusinessBlock from './BusinessBlock'
export default function Businesses({ businesses }) {
	let arr = [];
	for (let i in businesses) {
		arr.push(businesses[i]);
	}
	// console.log(arr);

	return (
		<div className="businesses_container">
			<h1>All businesses page</h1>
			{arr.map(business => {
				return (
						<BusinessBlock business={business} key={business.id}/>
				);
			})}
		</div>
	);
}
