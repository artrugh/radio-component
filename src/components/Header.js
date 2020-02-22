import React from 'react';

const Header = ({turnOff}) => {
    return (
        <div  className="header">
            <i 
                className="fas fa-chevron-left" ></i>
            <h2 
                className="station" >
                STATIONS
                </h2>
            <i  className="fas fa-power-off"
                onClick={() => turnOff()}></i>
        </div>
    );
}

export default Header;
