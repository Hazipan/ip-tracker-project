import { useMap, Marker, Popup } from "react-leaflet";

const MapComponent = (props) => {
  const map = useMap();

  map.flyTo(props.latLng);

  return (
    <Marker position={props.latLng}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default MapComponent;