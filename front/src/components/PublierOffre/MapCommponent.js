import React from "react";
import { GoogleMap, LoadScript, Autocomplete } from "@react-google-maps/api";

const api = "AIzaSyDQLfoT69SVIMwn06NymNrSPw4qXKnm8ts";

const containerStyle = {
  width: "1200px",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Gmap = () => {
  return (
    <LoadScript googleMapsApiKey={api} libraries={["places"]}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Autocomplete>
          <div>
            <input
              type="text"
              placeholder="Point de Départ..."
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
                top: "2%",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Point d'Arriver..."
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px",
                top: "2%",
              }}
            />
          </div>
        </Autocomplete>
        <></>
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Gmap);
