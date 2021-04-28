import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export function MapContainer(props) {
	let { business } = props;
	return (
		<Map
			google={props.google}
			// zoom={30}
			style={{width: '600px', height: '400px'}}
			initialCenter={{
				lat: business.coordinates[0],
				lng: business.coordinates[1],
			}}
		>
			<Marker name={business.name} />
		</Map>
	);
}
export default GoogleApiWrapper({
	apiKey: 'AIzaSyDqLfLpVRxsAPiyjFlmo07JeoOjZBkKiA8',
})(MapContainer);
