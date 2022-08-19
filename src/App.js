import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState } from "react";
import "./css/App.css";

const App = () => {
  return (
    <div>
      <h1>Hi there :)</h1>
      <MapContainer center={[45.5152, -122.6784]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.5152, -122.6784]}>
          <Popup>
            It's a popup!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default App;