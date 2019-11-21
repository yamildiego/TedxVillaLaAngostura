import React, { Component } from 'react';
import './CardOrganizer.css';

class CardOrganizer extends Component {
    render() {
        return (
            <div className="CardOrganizer">
                <div className="card m-auto" >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={this.props.image} className="card-img" alt={this.props.name} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.name}</h5>
                                <p className="card-text text-justify">{this.props.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOrganizer;