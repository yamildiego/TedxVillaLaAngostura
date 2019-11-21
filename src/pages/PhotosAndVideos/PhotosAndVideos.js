import React, { Component } from 'react';
import './PhotosAndVideos.css';
import Page from '../Page';

class PhotosAndVideos extends Component {
    render() {
        return (
            <Page title="Fotos y Videos">
                <div className="PhotosAndVideos">
                    <p className="text-center font-italic" style={{ color: "#777", cursor: "default" }}>No disponible por el momento</p>
                </div>
            </Page>
        );
    }
}

export default PhotosAndVideos;