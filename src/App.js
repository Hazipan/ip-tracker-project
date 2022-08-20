import { MapContainer, TileLayer } from 'react-leaflet';
import { useState } from "react";
import MapComponent from './components/MapComponent';
import "./css/App.css";

const App = () => {
  let [latLng, setLatLng] = useState([45.5152, -122.6784]);
  let [ip, setIp] = useState("2601:1c2:1");

  const geolocate = async () => {
    const APIKey = "66d2e4194749435fb4d137f7e0bd1d90";

    if (ip) {
      console.log("requesting data...")
      let response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${APIKey}&ip=${ip}`);

      if (response.status === 200) {
        let data = await response.json();
        console.log(data);
        setLatLng([data.latitude, data.longitude])
      } else {
        console.error("That IP address is invalid or not in the database")
      }

    } else {
      console.error("You must provide a vaild IP address")
    }
  }

  return (
    <div className='app'>
      <h1>Hi there :)</h1>
      <button onClick={() => { setLatLng([0, 0]) }}>
        Test Button
      </button>
      <button onClick={() => { setLatLng([45.5152, -122.6784]) }}>
        Back to home
      </button>
      <button onClick={geolocate}>
        Geolocate
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