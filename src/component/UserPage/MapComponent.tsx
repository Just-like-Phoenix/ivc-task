import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
interface data {
  lat?: string;
  lng?: string;
}
const MapComponent = (props: data) => {
  const containerStyle = {
    height: "100%",
    flexGrow: "1",
  };

  const center = {
    lat: parseFloat(props.lat || "0"),
    lng: parseFloat(props.lng || "0"),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAxBbTCxy_6ULoJLPBJZ_sdVsK_BXTvei0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={2}>
        <Marker position={center}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
