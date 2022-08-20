import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from "react";
import MapComponent from './components/MapComponent';
import "./css/App.css";

const App = () => {
  let [latLng, setLatLng] = useState([45.5152, -122.6784])
  return (
    <div>
      <h1>Hi there :)</h1>
      <button onClick={() => { setLatLng([0, 0]) }}>
        Test Button
      </button>
      <button onClick={() => { setLatLng([45.5152, -122.6784]) }}>
        Back to home
      </button>
      <MapContainer className="map" center={[45.5152, -122.6784]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapComponent latLng={latLng} />
      </MapContainer>
    </div>
  )
}

export default App;