import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ListCardOrganizers.css';
import CardOrganizer from './CardOrganizer';

class ListCardOrganizers extends Component {
    render() {
        return (
            <div className="ListCardOrganizers">
                {
                    this.props.members.map((item) => {
                        return (
                            <CardOrganizer key={item.id} {...item} />
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        members: state.info[state.locale.lang].members
    }
}

export default connect(mapStateToProps)(ListCardOrganizers);