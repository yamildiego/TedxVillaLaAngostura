import React, { Component } from 'react';
import Constants from '../../config';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: Constants.keyGoogleMap }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    {/* <div
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>

        );
    }
}

export default Map;
