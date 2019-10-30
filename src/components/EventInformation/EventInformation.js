import React from 'react';
import './EventInformation.css';

const EventInformation = () => {
    return (
        <div className="EventInformation">
            <div className="EventInformationWhen">
                <span>El evento sera el</span> 15 de mayo - 18:00 hs
            </div>
            <div className="EventInformationWhere">
                Lugar del encuentro
            </div>
        </div>
    );
}

export default EventInformation;