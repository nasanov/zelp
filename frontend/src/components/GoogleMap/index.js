import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import logo from '../../images/logo.png';
// import LocationPin from './LocationPin';

export function MapContainer(props) {
	let { business } = props;
	// console.log('dfgsdfg', locationIcon);

	return (
		<Map
			google={props.google}
			zoom={16}
			style={{ width: '600px', height: '400px', border: '1px solid #ccc' }}
			initialCenter={{
				lat: business.coordinates[0],
				lng: business.coordinates[1],
			}}
		>
			{/* <LocationPin lat={business.coordinates[0]} lng={business.coordinates[1]} business={business} /> */}
			<Marker
				name={business.name}
				title={business.address}
				position={{ lat: business.coordinates[0], lng: business.coordinates[1] }}
			/>
		</Map>
	);
}
export default GoogleApiWrapper({
	apiKey: process.env.GOOGLE_MAPS_KEY,
})(MapContainer);
