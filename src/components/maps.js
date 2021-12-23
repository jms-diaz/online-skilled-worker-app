import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function Map(props) {

	const zoom = 18;
	const location = props.location;
	const [map, setMap] = useState(null);
	const initialPosition = [14.5893855, 120.98163132];
	const pin = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';

	const pinMB = L.icon({
		iconUrl: pin,
		iconSize: [24, 41],
		iconAnchor: [0, 44],
		popupAnchor: [12, -40],
		shadowUrl: null,
		shadowSize: null,
		shadowAnchor: null
	});

	let marker;
	if (props.searchActive === true) {
		map.flyTo(location, zoom);
		marker = <Marker position={location} icon={pinMB}/>
	} else {
		marker = <Marker position={initialPosition} icon={pinMB}/>
	}

	return (
		<MapContainer center={initialPosition}
					  whenCreated={setMap}
					  zoom={18}
					  scrollWheelZoom={false}
					  style={{
						  width: '100%',
						  height: '300px',
						  padding: '0',
						  margin: '0'
					  }}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{marker}
			{/*<Marker position={initialPosition} icon={pinMB}/>*/}
		</MapContainer>
	)
}