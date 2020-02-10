import React from 'react';

import uuid from 'uuid';

const Header = props => {
    return (
        <div key={uuid.v4()} className="header">
            <i key={uuid.v4()}
                className="fas fa-chevron-left" ></i>
            <h2 key={uuid.v4()}
                className="station" >
                STATIONS
                </h2>
            <i key={uuid.v4()} className="fas fa-power-off"
                onClick={() => props.onClickStations()}></i>
        </div>
    );
}

export default Header;
