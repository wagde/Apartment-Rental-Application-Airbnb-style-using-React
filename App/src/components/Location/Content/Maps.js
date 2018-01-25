import React, { Component } from 'react';
import styled from 'styled-components';
class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.addMarkerCallback = this.props.onAddMarker;
    }
    componentDidMount() {
        const israelCoords = {
            lat: 31.0461,
            lng: 34.8516
        };
        let map = new window.google.maps.Map(this.refs.map, {
            center: israelCoords,
            zoom: 8
        });

        this.placeMarker(this.props.latlng, map);
    }


placeMarker(latLng, map) {
    let marker = new window.google.maps.Marker({
        position: latLng,
        map: map
    });

    // map.panTo(latLng);
    // this.addMarkerCallback(marker);
}

render() {
    return (
        <div>
            <h3> We Are Here => </h3>
        <div ref="map" className="mapConte">Map Appears Here!</div>
        </div>
    );
}
}


export default GoogleMap;

