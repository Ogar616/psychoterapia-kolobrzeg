import React, { Component } from "react";

import { mapSrc, streeViewSrc } from "./data/locationSrcs";

class Location extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1>Jak dojadę? </h1>
          <iframe src={mapSrc} width="600" height="450" title="map" />
          <iframe
            src={streeViewSrc}
            width="600"
            height="450"
            title="street-view"
          />
        </div>
      </div>
    );
  }
}

export default Location;
