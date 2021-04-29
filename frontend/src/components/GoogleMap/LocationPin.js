import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/map-marker';

export default function LocationPin({ business }) {
	return (
		<div className="pin">
			<Icon icon={locationIcon} className="pin-icon" width="39"/>
			<p className="pin-text">{business.name}</p>
		</div>
	);
}
