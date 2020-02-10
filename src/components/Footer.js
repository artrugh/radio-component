import React from 'react';

import uuid from 'uuid';

const Footer = props => {
    return (
        <div className="footer"  key={uuid.v4()}>
            <p  key={uuid.v4()} className="currently">{props.radioOn? "CURRENTLY PLAYING": ""}</p>
            <p  key={uuid.v4()} className="currently-radio">{props.radioOn}</p>
        </div>
    );
}

export default Footer;