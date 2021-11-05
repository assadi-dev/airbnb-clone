import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

function Map({ searchResults }) {
  //Get longitude and latitude object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // center of location coordiates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 12,
  });

  const [selectedState, setSelectedState] = useState();

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/assadi-dev/ckvm82z8h32pf15qtpc43uf9i"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, index) => (
        <div key={index}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p className="cursor-pointer text-2xl animate-bounce">🏠</p>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
