export default function Content({ businesses }) {
	let arr = [];
	for (let key in businesses) {
		arr.push(businesses[key]);
	}

	return (
		<div>
			{/* <h1>All businesses page</h1>
			{arr.map(bus => {
				return (
					<div>
						<NavLink to={`businesses/${bus.id}`}>{bus.name}</NavLink>
					</div>
				);
			})} */}
		</div>
	);
}
