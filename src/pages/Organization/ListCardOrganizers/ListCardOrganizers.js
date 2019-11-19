import React, { Component } from 'react';
import './ListCardOrganizers.css';
import CardOrganizer from './CardOrganizer';

class ListCardOrganizers extends Component {
    state = {}
    render() {
        return (
            <div className="ListCardOrganizers">
                Cascada
                <CardOrganizer />
            </div>
        );
    }
}

export default ListCardOrganizers;