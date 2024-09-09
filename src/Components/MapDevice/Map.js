import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const chennaiLocations = [
  { lat: 13.0827, lng: 80.2707, name: "Chennai 1" },
  { lat: 13.0675, lng: 80.2376, name: "Chennai 2" },
  { lat: 13.0352, lng: 80.2465, name: "Chennai 3" },
  { lat: 13.0475, lng: 80.1997, name: "Chennai 4" },
  { lat: 13.0640, lng: 80.2478, name: "Chennai 5" },
  { lat: 13.0825, lng: 80.2700, name: "Chennai 6" },
  { lat: 13.0524, lng: 80.2503, name: "Chennai 7" },
  { lat: 13.0301, lng: 80.2097, name: "Chennai 8" },
  { lat: 13.0638, lng: 80.2205, name: "Chennai 9" },
  { lat: 13.0833, lng: 80.2622, name: "Chennai 10" }
];

const maduraiLocations = [
  { lat: 9.9252, lng: 78.1198, name: "Madurai 1" },
  { lat: 9.9307, lng: 78.1221, name: "Madurai 2" },
  { lat: 9.9398, lng: 78.1212, name: "Madurai 3" },
  { lat: 9.9407, lng: 78.1217, name: "Madurai 4" },
  { lat: 9.9261, lng: 78.1155, name: "Madurai 5" }
];

const DroneMap = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const onMarkerClick = (props, marker) => {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  };
  const customIcon = {
    path: "M 0,0 m -15,0 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0",
    fillColor: "green",
    fillOpacity: 1,
    strokeColor: "#021F80",
    strokeWeight: 2,
    scale: 1,
  };

  let chennaiCounter = 0;
  let maduraiCounter = 0;

  return (
    <Map
      google={props.google}
      zoom={6}
      onClick={onMapClicked}
      initialCenter={{
        lat: 13.0827,
        lng: 80.2707,
      }}
      mapTypeId={'satellite'} // Set the map type to satellite
      gestureHandling={'greedy'} // Allow regular scroll wheel zooming
    >
      {chennaiLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          name={location.name}
          onClick={onMarkerClick}
          icon={customIcon} // Apply the custom icon
          label={{
            text: `${++chennaiCounter}`, // Display Chennai marker index
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        />
      ))}

      {maduraiLocations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          name={location.name}
          onClick={onMarkerClick}
          icon={customIcon} // Apply the custom icon
          label={{
            text: `${++maduraiCounter}`, // Display Madurai marker index
            color: 'white',
            fontSize: '12px',
            fontWeight: 'bold',
          }}
        />
      ))}

      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <h4>{selectedPlace?.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
}


export default GoogleApiWrapper({
  apiKey:"AIzaSyAKJY7yGLbWdCF_DkxXTQH0Cx0gUxhzrpA"
})(DroneMap);

