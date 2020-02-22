import React from 'react';

import uuid from 'uuid';

const Footer = ({radioOn}) => {
    return (
        <div className="footer" key={uuid.v4()}>
            <p
                key={uuid.v4()}
                className="currently">
                {radioOn ? "CURRENTLY PLAYING" : "-=|||=-"}
            </p>
            <p
                key={uuid.v4()}
                className="currently-radio">
                {radioOn ? radioOn : "RADIO OFF"}
            </p>
        </div>
    );
}

export default Footer;